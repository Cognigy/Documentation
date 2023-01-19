import datetime
import hashlib
import os
from pathlib import Path
from threading import Thread

from mongoengine import connect, Q, disconnect, register_connection

from analyse import extract_title, extract_subtitle, generate_url
from article import Article
from benchmark import benchmark
from index import index_document
from utils import create_schedule, generate_db_uri


# TODO implement logging globally
# register_connection(alias='default', name='documentation_index', host=generate_db_uri())
# the above line was a first try to implement a default connection for mongoengine.


def save_doc_and_index(doc, file):
    doc.save()
    doc_id = str(doc.id)
    index_document(doc_id, file)


class Indexer:
    def __init__(self):
        connect(host=f"{generate_db_uri()}documentation_index")
        self.cwd = str(Path(__file__).absolute().parent.parent.parent)
        self.base_url = "https://docs.cognigy.com"
        self.file_list = []
    
    def set_cwd(self, path: str) -> None:
        """Set the current working directory for indexing"""
        self.cwd = self.cwd + path
    
    def extract_files(self):
        """Extract files from directories below the current working directory"""
        for root, dirs, files in os.walk(self.cwd):
            for file in files:
                if file.endswith('.md'):
                    self.file_list.append(os.path.join(root, file))
    
    def index_file(self, file):
        
        with open(file, 'rb') as f:
            doc_content = f.read()
            doc_hash = hashlib.sha256(doc_content).hexdigest()

        cur_doc = Article(
            title=extract_title(file),
            subtitle=extract_subtitle(file),
            url=generate_url(self.base_url, file, self.cwd),
            file_name=os.path.basename(file),
            indexed_at=datetime.date.today().strftime("%Y-%m-%d"),
            doc_hash=doc_hash
        )

        if doc_exists := Article.objects(
                Q(file_name=os.path.basename(file)) & Q(url=cur_doc.url)
        ).first():
            if doc_exists.doc_hash != doc_hash:
                doc_exists.doc_hash = doc_hash
                save_doc_and_index(doc_exists, file)
        else:
            save_doc_and_index(cur_doc, file)

    @benchmark
    def indexing(self):
        """
        runs the indexing process and stores new documents and indices in the database
        the indexing runs threaded.
        """
        
        threads = []
        
        for file in self.file_list:
            if file.split(self.cwd)[1] == '/index.md':
                continue
            
            t = Thread(target=self.index_file, args=(file,))
            threads.append(t)
            t.start()
        
        # wait for completion of all threads:
        for t in threads:
            t.join()
        
        print("indexing finished.")
        disconnect()


def run():
    """ Function to run the indexing process """
    # TODO: add try-except block and on global scope some logging and maybe health checks as well.
    print("start indexing..")
    app = Indexer()
    
    app.set_cwd("/docs/en/docs")
    app.extract_files()
    app.indexing()


if __name__ == "__main__":
    # first run before schedule starts:
    run()
    
    # set up the schedule
    scheduler = create_schedule(run)
    
    # handle start/stop mechanics:
    try:
        scheduler.start()
    except (KeyboardInterrupt, SystemExit):
        scheduler.shutdown()

import datetime
import os
from pathlib import Path

from mongoengine import connect

from index import MdIndex
from benchmark import benchmark
from analyse import extract_title, extract_subtitle, generate_url
from article import Article
from utils import create_schedule, generate_db_uri


# TODO implement logging globally

class Indexer:
    def __init__(self):
        connect(host=generate_db_uri() + "documentation_index")
        self.md_index = MdIndex()
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
    
    @benchmark
    def indexing(self):
        """runs the indexing process and stores new documents and indices in the database"""
        cur_doc_id = ""
        
        for file in self.file_list:
            # ignoring the sites landing index page:
            if file.split(self.cwd)[1] == '/index.md':
                continue
            
            cur_doc = Article(
                title=extract_title(file),
                subtitle=extract_subtitle(file),
                url=generate_url(self.base_url, file, self.cwd),
                file_name=os.path.basename(file),
                indexed_at=datetime.date.today().strftime("%Y-%m-%d")
            )
            
            doc_exists = False
            
            for doc in Article.objects:
                if doc.title == cur_doc.title and doc.url == cur_doc.url:
                    cur_doc_id = str(doc.id)
                    doc_exists = True
            
            if not doc_exists:
                cur_doc.save()
                cur_doc_id = str(cur_doc.id)
            
            self.md_index.index_document(cur_doc_id, file)
        
        self.md_index.store_index()


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
    
    

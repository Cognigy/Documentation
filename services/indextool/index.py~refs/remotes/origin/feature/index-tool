import datetime
import fileinput
import os
from mongoengine import EmbeddedDocument, EmbeddedDocumentField, StringField, ListField, Document, disconnect, connect

from analyse import analyser

# from benchmark import benchmark

# disconnect()
# connect('documentation_index')


class IndexEntry(EmbeddedDocument):
    """ Schema (embedded) for document related data connected to the index. """
    document_id = StringField(required=True)
    occurrence = ListField(required=False, default=[])
    line = ListField(required=False, default=[])


class Index(Document):
    """ Schema for an index element."""
    word = StringField(required=True)
    meta_data = ListField(EmbeddedDocumentField(IndexEntry), required=False, default=[])
    created_at = StringField(required=False, default=None)
    updated_at = StringField(required=False, default=None)
    
    meta = {'collection': 'index'}


# @benchmark  
def find_header_boundary(file_name: str):
    """ Helper function to find the header markings in the given file."""
    header_boundary = []
    
    with fileinput.input(files=file_name) as f:
        for line in f:
            if line.startswith('---'):
                header_boundary.append(fileinput.lineno())
    
    return header_boundary


class MdIndex:
    def __init__(self) -> None:
        """ Constructor for md index. """
        # init the index list either empty or with the database content:
        self.index = [] if len(Index.objects) == 0 else Index.objects
    
    # @benchmark
    def index_document(self, document_id: str, file_name: str):
        """" Method to generate the index for the given file """
        header_boundary = find_header_boundary(file_name)
        
        with open(file_name, 'r') as file:
            boundary = header_boundary[1] if len(header_boundary) > 0 else 1
            content = file.readlines()[boundary:]
            line_count = boundary
            
            for line in content:
                # check occurrence of words:
                if line.startswith('# '):
                    occurrence = "title"
                elif line.startswith('## '):
                    occurrence = "subtitle"
                else:
                    occurrence = "text"
                
                for word in analyser(line):
                    indexed = False
                    
                    for entry in self.index:
                        if entry.word == word:
                            is_member = False
                            entry.updated_at = datetime.date.today().strftime("%Y-%m-%d")
                            
                            for item in entry.meta_data:
                                if item.document_id == document_id:
                                    if occurrence not in item.occurrence:
                                        item.occurrence.append(occurrence)
                                        item.line.append(line_count)
                                    else:
                                        if line_count not in item.line:
                                            item.line.append(line_count)
                                    
                                    is_member = True
                            
                            if not is_member:
                                entry.meta_data.append(
                                    IndexEntry(
                                        document_id=document_id,
                                        occurrence=[occurrence],
                                        line=[line_count]
                                    )
                                )
                            
                            indexed = True
                            break
                    
                    if not indexed:
                        cur_index = Index(word=word)
                        cur_meta_data = IndexEntry(document_id=document_id)
                        cur_meta_data.occurrence.append(occurrence)
                        cur_meta_data.line.append(line_count)
                        cur_index.meta_data.append(cur_meta_data)
                        cur_index.created_at = datetime.date.today().strftime("%Y-%m-%d")
                        
                        self.index.append(cur_index)
                
                line_count += 1
    
    # @benchmark        
    def store_index(self):
        """ Method to store the previous build index list in the database or update the existing one """
        for index in self.index:
            index.save()
        
        disconnect()


if __name__ == '__main__':
    test_file = os.getcwd() + '/docs/en/docs/insights/cognigy-insights.md'
    test_id = '62dec0b6aad46fe463c8ee94'
    indexer = MdIndex()
    indexer.index_document(test_id, test_file)
    indexer.store_index()

import datetime
import os
from threading import Lock

from mongoengine import EmbeddedDocument, EmbeddedDocumentField, StringField, ListField, Document

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
    lock = Lock()

    with lock:
        with open(file_name, 'r') as f:
            header_boundary.extend(f.tell() for line in f if line.startswith('---'))
            
    return header_boundary


def index_document(document_id: str, file_name: str):
    # sourcery skip: low-code-quality
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

                for entry in Index.objects.filter(word=word):
                    entry.updated_at = datetime.date.today().strftime("%Y-%m-%d")
                    meta_data, created = entry.meta_data.get_or_create(document_id=document_id)
                    
                    if occurrence not in meta_data.occurrence:
                        meta_data.occurrence.append(occurrence)
                        meta_data.line.append(line_count)
                    elif line_count not in meta_data.line:
                        meta_data.line.append(line_count)
                    meta_data.save()
                    indexed = True
                    
                    break
                
                if not indexed:
                    cur_index = Index(word=word)
                    cur_index.created_at = datetime.date.today().strftime("%Y-%m-%d")
                    cur_index.save()
                    
                    cur_meta_data = IndexEntry(document_id=document_id)
                    cur_meta_data.occurrence.append(occurrence)
                    cur_meta_data.line.append(line_count)
                    
                    cur_index.meta_data.append(cur_meta_data)
                    cur_index.save()

            line_count += 1


if __name__ == '__main__':
    test_file = f'{os.getcwd()}/docs/en/docs/insights/cognigy-insights.md'
    test_id = '62dec0b6aad46fe463c8ee94'
    index_document(test_id, test_file)

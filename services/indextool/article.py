import datetime
from mongoengine import Document, StringField, ListField, URLField


class Article(Document):
    title = StringField(required=True)
    subtitle = ListField(required=False, default=[])
    url = URLField(required=True)
    file_name = StringField(required=False, default="")
    created_at = StringField(required=False, default=datetime.date.today().strftime("%Y-%m-%d"))
    indexed_at = StringField(required=False, default=None)
    updated_at = StringField(required=False, default=None)
    
    meta = {"collection": "documents"}

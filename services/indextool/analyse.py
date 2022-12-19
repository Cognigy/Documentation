import re
import os
from string import punctuation
from nltk import download, word_tokenize
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

# download and update required resources if necessary:
download('punkt')
download('stopwords')

# prepare analyse globals:
en_stopwords = set(stopwords.words('english'))
porter_stemmer = PorterStemmer()


def extract_title(file_name: str) -> str:
    """ Extract the title from the given file or use the filename as the title instead. """
    cur_title = ""
    title_set = False
    
    with open(file_name, 'r') as cur_file:
        content = cur_file.read()
        
        for line in content.splitlines():
            if line.startswith('# '):
                cur_title = line.split('# ')[1].lower().strip()
                title_set = True
        
        if not title_set:
            cur_title = os.path.basename(cur_file.name).split('.')[0].lower().strip()
    
    return cur_title


def extract_subtitle(file_name: str) -> list:
    """ Extract the subtitles from the given file."""
    list_of_sub_titles = []
    cur_file = open(file_name, 'r')
    content = cur_file.read()
    
    for line in content.splitlines():
        if line.startswith('## '):
            list_of_sub_titles.append(line.split('## ')[1])
    
    return list_of_sub_titles


def lowercase_words(words: list) -> list:
    return [word.lower() for word in words]


def remove_newlines(words: list) -> list:
    return [word.split('\n')[0] for word in words]


def remove_html_tags(text: str) -> str:
    """ Remove all HTML tags from the given text. """
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)


def remove_markdown_links(text: str) -> str:
    """ Remove all markdown link-markup from the given text. """
    clean = re.compile('\[.*?\(.*?\)')
    return re.sub(clean, '', text)


def remove_markdown_backticks(text: str) -> str:
    """ Remove all markdown backtick-markup from the given text. """
    clean = re.compile('`_.*?`')
    return re.sub(clean, '', text)


# @benchmark
def analyser(text: str) -> list:
    """ Analyses the given text."""
    # preprocess the text before analysing:
    text = remove_html_tags(text)
    text = remove_markdown_links(text)
    # words = remove_newlines(words)
    
    # analyse the text:
    words = [porter_stemmer.stem(word) for word in word_tokenize(text) if
             word not in en_stopwords and word not in punctuation]
    return words


def generate_url(base_url: str, file: str, cwd: str) -> str:
    return base_url + (file.split(cwd)[1].split('.')[0]) + '/'

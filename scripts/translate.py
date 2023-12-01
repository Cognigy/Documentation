import os, requests, time
from fnmatch import fnmatch
from pathlib import Path

docs_path = Path("docs")
os.chdir(docs_path)

# to do - hard coded - improve so it takes these values from the mkdocs.yml file or from the docs.py file
locale_languages = ['de']
characters_translated_since_last_timeout = 0

def translate_md_files():
    for locale_language in locale_languages:
        files_to_be_translated = get_files_to_be_translated(locale_language)
        total_number_of_files_to_translate = len(files_to_be_translated)
        files_translated = 0

        for file_to_be_translated in files_to_be_translated:
            print(f"file to be translated: {file_to_be_translated}")
            translate_file(file_to_be_translated, locale_language)
            
            files_translated += 1

            print(f"Files translated {files_translated} / {total_number_of_files_to_translate}")

def get_files_to_be_translated(locale_language):
    files_to_be_translated = []

    for path, subdirs, files in os.walk(locale_language):
        for name in files:
            #if its not html file skip it
            if not fnmatch(name, "*.md"):
                continue

            files_to_be_translated.append(os.path.join(path.removeprefix('docs'), name))

    return files_to_be_translated

def translate_file(file_path, language):
    characters_limit = 50_000
    content_to_be_translated = open(file_path, "r").read()

    if len(content_to_be_translated) >= characters_limit:
        #todo - do better reporting of where this line has been found
        print("A line that can't be translated because its bigger than 50_000 characters has been found!")

    # surround it with try catch in case the call fails
    translated_md_content = translate_text(content_to_be_translated, language)
    
    file = open(file_path, "w")
    file.write(translated_md_content)
    file.close()

def translate_text(text_to_be_translated, language):
    global characters_translated_since_last_timeout
    # Add your key and endpoint
    key = "57c42f1efe5d4bf7bcec5bd1e39df3b0"
    endpoint = "https://api.cognitive.microsofttranslator.com"

    # location required if you're using a multi-service or regional (not global) resource.
    location = "westeurope"

    path = '/translate'
    constructed_url = endpoint + path

    params = {
        'api-version': '3.0',
        'from':        'en',
        'to':          language,
        'textType':    'html'
    }

    headers = {
        'Ocp-Apim-Subscription-Key':    key,
        'Ocp-Apim-Subscription-Region': location,
        'Content-type':                 'application/json'
    }

    # todo remove the hard coded key
    body = [{'text': text_to_be_translated}]

    characters_translated_since_last_timeout += len(text_to_be_translated)
    if characters_translated_since_last_timeout > 500_000:
        time.sleep(60)
        characters_translated_since_last_timeout = 0

    response = requests.post(constructed_url, params=params, headers=headers, json=body).json()
    
    # todo remove this cheat code - it is prone to failure
    return response[0]['translations'][0]['text']

if __name__ == '__main__':
    translate_md_files()
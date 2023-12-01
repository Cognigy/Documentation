import os, requests, uuid, json, uuid, glob, urllib, contextlib, shutil, re, time
from fnmatch import fnmatch
from pathlib import Path

scripts_path = Path("scripts")
site_path = Path("site")
os.chdir(site_path)
characters_translated_since_last_timeout = 0
# to do - hard coded - improve so it takes these values from the mkdocs.yml file or from the docs.py file
locale_languages = ['de']

def translate_html_files():
    for locale_language in locale_languages:
        if os.path.isdir(locale_language):
            shutil.rmtree(locale_language)

    files_to_be_translated = get_english_html_files()
    total_number_of_files_to_translate = len(files_to_be_translated)
    current_file_being_translated = 0

    for locale_language in locale_languages:
        print(f"Currently making translations for language: {locale_languages}")
        copy_assets_to_language_folder(locale_language)

        for file_to_be_translated in files_to_be_translated:
            translate_file(file_to_be_translated, locale_language)
            
            current_file_being_translated += 1

            print(f"Files translated {current_file_being_translated} and total files to be translated {total_number_of_files_to_translate}")

def get_locale_html_pattern():
    locale_html_patterns = []

    for locale_language in locale_languages:
        locale_html_patterns.append("*." + locale_language + ".html")

    return tuple(locale_html_patterns)

def get_english_html_files():
    locale_html_patterns = get_locale_html_pattern()
    english_html_files = []

    for path, subdirs, files in os.walk('./'):
        for name in files:
            #if its not html file skip it
            if not fnmatch(name, "*.html"):
                continue

            #if its html file for the other languages beside English, skip it
            for locale_html_pattern in locale_html_patterns:
                if fnmatch(name, locale_html_pattern):
                    continue

            english_html_files.append(os.path.join(path.removeprefix('site'), name))

    return english_html_files

def translate_file(file_path, language):
    characters_limit = 50_000
    lines = read_file_in_lines(file_path)

    translated_file_path = get_translated_file_path(file_path, language)

    os.makedirs(os.path.dirname(translated_file_path), exist_ok=True)
    open(translated_file_path, 'w').close()

    with open(translated_file_path, "a") as file:
        string_to_be_translated = ''

        for line in lines:
            characters_in_line = len(line)

            if characters_in_line >= characters_limit:
                #todo - do better reporting of where this line has been found
                print("A line that can't be translated because its bigger than 50_000 characters has been found!")
            
            if len(string_to_be_translated + line) < characters_limit:
                string_to_be_translated += line
                continue

            # surround it with try catch in case the call fails
            print(len(string_to_be_translated))
            translated_html_chunk = translate_text(string_to_be_translated)
            file.write(translated_html_chunk)

            string_to_be_translated = line
    
    file.close()

def get_translated_file_path(english_file_name, target_language):
    return target_language + '/' + english_file_name.replace('.html', '.' + target_language + '.html')

def read_file_in_lines(file_path):
    with open(file_path, 'r') as f:
        pattern = re.compile(r'^\s*$')
        lines = list(filter(lambda s: not pattern.match(s), f.readlines()))

    f.close()

    return lines

def translate_text(text_to_be_translated):
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
        'to':          'de',
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

def copy_assets_to_language_folder(language):
    for path, subdirs, files in os.walk('./'):
        for name in files:
            #if its html file skip it
            if fnmatch(name, "*.html"):
                continue
            
            path.removeprefix('site')
            asset_current_path = os.path.join(path, name)

            os.makedirs(os.path.join(path).replace('./', './' + language + '/'), exist_ok=True)
            asset_target_path = os.path.join(path, name).replace('./', './' + language + '/')
            
            shutil.copyfile(asset_current_path, asset_target_path)

if __name__ == '__main__':
    translate_html_files()
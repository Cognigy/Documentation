import os
from .. import analyse


def test_extract_title():
    cwd = os.getcwd()
    title = analyse.extract_title(cwd + "/test.md")
    assert title


def test_extract_subtitle():
    cwd = os.getcwd()
    subtitle = analyse.extract_subtitle(cwd + "/test.md")
    assert subtitle

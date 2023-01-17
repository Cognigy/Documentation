import os
import pytest
from .. import analyse


def test_extract_title():
    cwd = os.getcwd()
    title = analyse.extract_title(f"{cwd}/test.md")
    assert title


def test_extract_subtitle():
    cwd = os.getcwd()
    subtitle = analyse.extract_subtitle(f"{cwd}/test.md")
    assert subtitle

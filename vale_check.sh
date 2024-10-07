#!/bin/bash

# Get the list of committed files in the current branch
committed_files=$(git diff --name-only HEAD^)

# Check if there are any committed files
if [ -z "$committed_files" ]; then
  echo "No committed files to check."
  exit 0
fi

# Run Vale on the committed files
vale $committed_files
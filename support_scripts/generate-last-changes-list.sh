#!/bin/bash

# Description: Generate a list of .md files with their last modification date and user.

# Step 1: Define the target directories
TARGET_DIRS=(
  "../docs/ai"
  "../docs/ai-copilot"
  "../docs/help"
  "../docs/insights"
  "../docs/live-agent"
  "../docs/pci-vault"
  "../docs/voice-gateway"
  "../docs/webchat"
  "../docs/xApps"
)

# Step 2: Output file
OUTPUT_FILE="$(pwd)/../last_changes/file_changes_all.txt"
echo -e "File Name\tDate of Last Change\tUser" > "$OUTPUT_FILE"

# Step 3: Loop through the target directories
for TARGET_DIR in "${TARGET_DIRS[@]}"; do
  # Check if the target directory exists
  if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory $TARGET_DIR does not exist. Skipping." >&2
    continue
  fi

  # Step 4: Process each .md file
  while IFS= read -r file; do
    # Get the last change (date and user) for the current file
    last_change=$(git log -1 --date=short --format="%ad %an" -- "$file")
    # If the file has a last change, append it to the output
    if [ -n "$last_change" ]; then
      echo -e "$file\t$last_change" >> "$OUTPUT_FILE"
    fi
  done < <(find "$TARGET_DIR" -type f -name "*.md")
done

# Step 5: Display results
echo "Changes for .md files across all directories saved to $OUTPUT_FILE."
echo -e "\nSummary:"
cat "$OUTPUT_FILE"

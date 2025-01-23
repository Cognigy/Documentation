#!/bin/bash

# Description: Generate a list of .md files with their last modification date and user.

# Step 1: Define the base directory as the root of the Git repository
BASE_DIR=$(git rev-parse --show-toplevel)

# Step 2: Determine the default branch
# First try to get it from origin HEAD, fallback to 'main' if not found
DEFAULT_BRANCH=$(git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@' || echo "main")

# Print the branch being checked
echo "Checking changes on branch: $DEFAULT_BRANCH"

# Step 3: Define the target directories
TARGET_DIRS=(
  "$BASE_DIR/docs/ai"
  "$BASE_DIR/docs/ai-copilot"
  "$BASE_DIR/docs/help"
  "$BASE_DIR/docs/insights"
  "$BASE_DIR/docs/live-agent"
  "$BASE_DIR/docs/pci-vault"
  "$BASE_DIR/docs/voice-gateway"
  "$BASE_DIR/docs/webchat"
  "$BASE_DIR/docs/xApps"
)

# Step 4: Output file
OUTPUT_FILE="$BASE_DIR/docs/_assets/last_changes/file_changes_all.txt"
echo -e "File Name\tDate of Last Change\tUser" > "$OUTPUT_FILE"

# Step 5: Loop through the target directories
for TARGET_DIR in "${TARGET_DIRS[@]}"; do
  # Check if the target directory exists
  if [ ! -d "$TARGET_DIR" ]; then
    echo "Error: Directory $TARGET_DIR does not exist. Skipping." >&2
    continue
  fi

  # Step 6: Process each .md file
  while IFS= read -r file; do
    # Check if the file is tracked by Git
    if git ls-files --error-unmatch "$file" > /dev/null 2>&1; then
      # Get the last change (date and user) for the current file
      # Try branch-specific first, fall back to any branch if needed
      last_change=$(git log -1 --date=short --format="%ad %an" "origin/$DEFAULT_BRANCH" -- "$file" 2>/dev/null || 
                    git log -1 --date=short --format="%ad %an" -- "$file")
      
      # If the file has a last change, append it to the output
      if [ -n "$last_change" ]; then
        # Get the relative path from the BASE_DIR for output clarity
        relative_file_path="${file#$BASE_DIR/}"
        echo -e "$relative_file_path\t$last_change" >> "$OUTPUT_FILE"
      fi
    fi
  done < <(find "$TARGET_DIR" -type f -name "*.md")
done

# Step 7: Display results
echo "Changes for .md files across all directories saved to $OUTPUT_FILE."
echo -e "\nSummary:"
cat "$OUTPUT_FILE" 
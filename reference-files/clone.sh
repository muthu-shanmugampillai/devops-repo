#!/bin/bash

# Define the repository URL
repo_url="git@gitlab.com:Deploysolvendo/devopsproject.git"

# Prompt the user to select a branch
echo "Select a branch to clone:"
git ls-remote --heads $repo_url | awk -F'/' '{print $3}' | while read -r branch; do
    echo "$branch"
done

read -p "Enter the branch name: " selected_branch

read -p "Enter the destination path (or press Enter to use the default): " custom_path

# If the user didn't specify a custom path, use the default
if [ -z "$custom_path" ]; then
    custom_path="$selected_branch"  # Change 'yourrepository' to the desired default path
fi

# Clone the selected branch to the custom destination path
git clone -b $selected_branch $repo_url $custom_path

# Get the absolute path of the destination directory
custom_path=$(realpath "$custom_path")

# Display the fetched files
echo "Fetched files in branch $selected_branch (in $custom_path):"
ls "$custom_path"

echo "Clone completed for branch $selected_branch to $custom_path"

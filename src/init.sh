#!/bin/bash

# Create directory for images
mkdir -p plant_images

# Function to download image
download_image() {
    local url="$1"
    local filename=$(basename "$url" | cut -d'?' -f1)
    echo "Downloading: $filename"
    curl -L --progress-bar "$url" -o "plant_images/$filename"
    
    if [ $? -eq 0 ]; then
        echo "✓ Successfully downloaded $filename"
    else
        echo "✗ Failed to download $filename"
        echo "$url" >> failed_downloads.txt
    fi
}

# Create or clear the failed downloads log
> failed_downloads.txt

echo "Starting downloads..."
echo "Images will be saved in: $(pwd)/plant_images"

# Read URLs from the JSON array and download each image
while read -r url; do
    # Skip empty lines
    [ -z "$url" ] && continue
    
    # Download image
    download_image "$url"
    
    # Add a small delay to be nice to the server
    sleep 0.5
done < <(grep -o '"src": "[^"]*"' images.json | cut -d'"' -f4)

# Summary
total_files=$(ls -1 plant_images | wc -l)
failed_files=$(wc -l < failed_downloads.txt)
successful_files=$((total_files))

echo ""
echo "Download Summary:"
echo "----------------"
echo "Total images attempted: $((successful_files + failed_files))"
echo "Successfully downloaded: $successful_files"
echo "Failed downloads: $failed_files"

if [ $failed_files -gt 0 ]; then
    echo ""
    echo "Failed downloads have been logged to failed_downloads.txt"
fi
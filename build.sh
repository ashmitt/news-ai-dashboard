#!/bin/bash

# Exit on any error
set -e

echo "Starting build process..."

# Navigate to frontend directory
cd frontend

echo "Installing dependencies..."
npm ci

echo "Building the application..."
npm run build

echo "Build completed successfully!"
echo "Contents of dist directory:"
ls -la dist/

# Navigate back to root
cd .. 
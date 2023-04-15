#!/bin/sh

dir=".git"
if [ -d "$dir" ]; then
  echo "Set git config"
  git config --local core.autocrlf input
  git config --local user.name "Gleb"
  git config --local user.email "kgleb874@gmail.com"
  git config user.name
  git config user.email
else
    echo "Error: current directory is not project root"
fi
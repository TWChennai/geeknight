#!/usr/bin/env bash

cd $SNAP_WORKING_DIR

echo "Installing Gems..."
bundle install

echo "Building site..."
bundle exec nanoc

echo "Fetching gh-pages..."
git fetch origin gh-pages
git checkout --track origin/gh-pages
cp -r gh-pages/* ./
rm -rf gh-pages tmp

echo "Checking for changes..."
if [[ -z $(git status -s) ]]; then
  echo "No changes to push"
  exit 0
fi

echo "Pushing result..."
git add --all .
git commit --amend --allow-empty -q -m "Built $SNAP_COMMIT_SHORT"
git push -fq origin gh-pages
#!/usr/bin/env bash

echo "Reconstituting SSH key..."
echo $DEPLOY_KEY | sed 's/\\n/\'$'\n/g' > id_geeknight
chmod 600 id_geeknight

export GIT_SSH=$(pwd)/go/ssh.sh
export SSH_KEY=$(pwd)/id_geeknight

set -xe

echo "Cloning gh-pages..."
rm -Rf gh-pages
git config --global user.email "snap@snap-ci.org"
git config --global user.name "snap-ci"
git clone --quiet --branch=gh-pages git@github.com:TWChennai/geeknight.git gh-pages

echo "Building site..."
bundle exec nanoc

echo "Checking for changes..."
cd gh-pages
if [[ -z $(git status -s) ]]; then
  echo "No changes to push"
  exit 0
fi

echo "Pushing result..."
git add --all .
git commit --amend --allow-empty -q -m "Built $SNAP_COMMIT_SHORT"
git push -fq origin gh-pages

echo "Cleaning up..."
rm -Rf ~/.ssh/id_geeknight*

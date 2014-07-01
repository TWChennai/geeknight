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
(cd gh-pages && git rm -rfq *)

echo "Building site..."
bundle exec nanoc

echo "Pushing result..."
cd gh-pages
git add -f .
git commit -q -m "Built"
git push -fq origin gh-pages

echo "Cleaning up..."
rm -Rf ~/.ssh/id_geeknight*

#!/usr/bin/env sh
set -e

npm run build

cd dist

git init 
git add -A
git commit -m 'deploy'
git push -f git@github.com/RodrigueIragi/vue-pages.git main:gh-pages
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
cd -
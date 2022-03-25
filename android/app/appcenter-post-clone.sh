#!/usr/bin/env bash

sudo npm cache clean -f

sudo npm install -g n

sudo n stable

sudo npm install yarn -g

sudo npm install -g ionic

# Cache Issue
sudo chown -R 501:20 "/Users/runner/.npm"

cd ../../

npm i

ionic build

npx cap sync
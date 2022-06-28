#!/usr/bin/env bash

# Modify the version numbers of dependencies as needed. Then run ./bumpVersions.sh to create updated versions of
# * packages.dhall
# * createPerspectivesLinks.sh
# * package.json

PERSPECTIVESREACT=v0.19.0
SCREENUPLOADER=v1.1.0

sed "s/PERSPECTIVESREACT/${PERSPECTIVESREACT}/g;\
s/SCREENUPLOADER/${SCREENUPLOADER}/g;\
" package.template.json > package.json
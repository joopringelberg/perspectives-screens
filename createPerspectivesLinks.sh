#!/usr/bin/env bash

cd node_modules

rm -R screenuploader

ln -s ../../screenuploader screenuploader

rm -R perspectives-couchdb

ln -s ../../perspectives-couchdb perspectives-couchdb

cd ..

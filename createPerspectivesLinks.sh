#!/usr/bin/env bash

cd node_modules

rm -R perspectives-proxy
rm -R perspectives-react
rm -R screenuploader
rm -R perspectives-couchdb

ln -s ../../perspectives-proxy perspectives-proxy
ln -s ../../perspectives-react perspectives-react
ln -s ../../screenuploader screenuploader
ln -s ../../perspectives-couchdb

cd ..

#!/usr/bin/env bash

cd node_modules

rm -R perspectives-proxy
rm -R perspectives-react

ln -s ../../perspectives-proxy perspectives-proxy
ln -s ../../perspectives-react perspectives-react

cd ..

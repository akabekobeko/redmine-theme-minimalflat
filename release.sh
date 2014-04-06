#!/bin/sh

# It is a script to generate the release image.
# ex: $ bash release.sh v1.0.0
# 
# @param $1 Version suffix

TARGETDIR=minimalflat

mkdir ${TARGETDIR}

# Sub directories
cp -r fonts       ${TARGETDIR}
cp -r javascripts ${TARGETDIR}
cp -r stylesheets ${TARGETDIR}

find ${TARGETDIR} -name ".DS_Store" -print -exec rm {} ";"
zip -r minimalflat-$1.zip ${TARGETDIR}
rm -rf ${TARGETDIR}

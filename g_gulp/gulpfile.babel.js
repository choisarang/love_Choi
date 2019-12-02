// gulpfile.babel.js

// const gulp = require('gulp')' =>
import gulp from "gulp";
import corejs from "core-js";
// gulp, corejs 불러온 뒤 작업

import mkdir from "mk-dirs";
import writeFile from "write";

const url = {
  module:'./node_modules/',
  source:'./public/source/',
  dest:'./public/assest/'
};


async function makeDir(){
  await Promise.all([
    mkdir('public'),
    mkdir(url.source),
    mkdir(url.source + 'html'),
    mkdir(url.source + 'scss'),
    mkdir(url.source + 'scss/src'),
    mkdir(url.source + 'scss/base'),
    mkdir(url.source + 'img'),
    mkdir(url.source + 'js'),
    mkdir(url.source + 'js/base'),
    mkdir(url.source + 'js/src'),
    mkdir(url.source + 'media'),
    mkdir(url.source + 'media/audio'),
    mkdir(url.source + 'media/vidio'),
    mkdir(url.source + 'fonts'),
    mkdir(url.source + 'IE')
  ])
}

export const make = makeDir;

// ------------------------------------------------------
async function makefile(){
  writeFile.sync(url.source+'index.html',`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>Document</title>\n<script>\nwindow.location = "./html/main.html";\n</script>\n</head>\n<body>\n</body>\n</html>`);
  writeFile.sync(url.source+'html/main.html');
  writeFile.sync(url.source+'scss/base/reset.scss');
  writeFile.sync(url.source+'scss/base/common.scss');
}

export const mkfile = gulp.series(makefile);

const first = gulp.series(makeDir, gulp.parallel(makefile))
export default first;

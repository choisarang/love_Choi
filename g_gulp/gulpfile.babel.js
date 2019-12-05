// gulpfile.babel.js

// 모듈 불러오기 ------------------------------------------------------

// const gulp = require('gulp')' =>
import gulp       from "gulp";        // 기본 걸프모듈
import corejs     from "core-js";     // async 기능수행
// gulp, corejs 불러온 뒤 작업
import mkdir      from "mk-dirs";     // 폴더생성
import writeFile  from "write";       // 파일삽입 및
import scss       from "gulp-sass"    // scss 사용
import sync       from "browser-sync" // browser-sync 호출

const browserSync = sync.create();

const url = {
  module:'./node_modules/',
  source:'./public/source/',
  dest:'./public/assest/'
};


// 폴더 생성 ------------------------------------------------------
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

// export const make = makeDir;

// ------------------------------------------------------
async function makefile(){
  writeFile.sync(url.source+'index.html',`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>Document</title>\n<script>\nwindow.location = "./html/main.html";\n</script>\n</head>\n<body>\n</body>\n</html>`);
  // writeFile.sync(url.source+'html/main.html');
  // writeFile.sync(url.source+'scss/base/reset.scss');
  // writeFile.sync(url.source+'scss/base/common.scss');
}
// scss 기능 수행 ------------------------------------------------------
// 1. scss 옵션 설정
const scssOption = {
  // 컴파일 방법 : nested, expanded, compact, compressed
  outputStyle:'compact',
  // 들여쓰기 방법 : tab, space
  indentType:'space',
  // 들여쓰기 간격
  indentWidth:2,
  // 소수점 계산시 자리 수
  percision:6,
  // 컴파일시 scss 파일위치를 주석으로 처리 유무
  sourceComments:false
};

async function convertCss(){
  //src를 dest로 옮겨라
  gulp.src(url.source+'scss/**/*.scss')
  .pipe(scss(scssOption).on('error', scss.logError))
  .pipe(gulp.dest(url.source+'css/'))
  .pipe(browserSync.reload({stream:true}))
}

function watch(){
  convertCss();
  gulp.watch(url.source+'scss/**/*.scss', convertCss)
}

// browser-sync 실행
function server(){
  browserSync.init({
    server:{
      baseDir:url.source
    }
  });
}


// 걸프 외부에서 실행 명령어 ------------------------------------------------------
export const make = gulp.parallel(makeDir);
export const mkfile = gulp.series(makefile);
const first = gulp.series(makeDir, gulp.parallel(makefile));

export const conScss = watch;

const gulpServer = gulp.parallel(server, conScss, watch)

export default gulpServer;

const { series } = require("gulp");
const gulp = require("gulp");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");

const sass = require("gulp-sass")(require("sass"));

function transformacaoCSS() {
  return gulp
    .src("src/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat("estilo.min.css"))
    .pipe(gulp.dest("build/css"));
}

exports.default = series(transformacaoCSS);

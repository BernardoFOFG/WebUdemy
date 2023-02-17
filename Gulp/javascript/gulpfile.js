const { series } = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");

function calculadora(callblack) {
  return gulp
    .src("./src/**/*.js")
    .pipe(
      babel({
        comments: false,
        presets: ["env"],
      })
    )
    .pipe(uglify())
    .on("error", (erro) => console.log(erro))
    .pipe(concat("codigo.min.js"))
    .pipe(gulp.dest("build"));
}

module.exports.default = series(calculadora);

const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass")(require("sass"));
const uglifyCSS = require("gulp-uglifycss");

function appHTML() {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}
function appCSS() {
  return gulp
    .src("src/assets/sass/index.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(uglifyCSS({ uglyCommets: true }))
    .pipe(concat("app.min.css"))
    .pipe(gulp.dest("build/assets/css"));
}
function appJS() {
  return gulp
    .src("src/assets/js/**/*.js")
    .pipe(babel({ presets: ["ENV"] }))
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build/assets/js"));
}
function appIMG() {
  return gulp
    .src("src/assets/imgs/**/*.*")
    .pipe(gulp.dest("build/assets/images"));
}

gulp.task("appHTML", appHTML);

module.exports = {
  appHTML,
  appCSS,
  appJS,
  appIMG,
};

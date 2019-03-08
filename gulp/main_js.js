var gulp = require("gulp");
var concat = require("gulp-concat");
var babel = require("gulp-babel");


gulp.task("js", function () {
  return gulp.src(["source/js/jquery.min.js", "source/js/main.js"])
    .pipe(concat("main.js", {
      newLine: ";"
    }))
    .pipe(gulp.dest("build/js"));
});

gulp.task("home_js", function () {
  return gulp.src(["source/js/jquery.min.js", "source/js/TweenMax.min.js", "source/js/home_js.js"])
    .pipe(concat("home_js.js", {
      newLine: ";"
    }))
    .pipe(gulp.dest("build/js"));
});

gulp.task("js_copy", function () {
  return gulp.src("source/js/authorisation.js")
    .pipe(gulp.dest("build/js"));
});

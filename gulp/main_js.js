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

gulp.task("js_copy", function () {
  return gulp.src(["source/js/home_js.js", "source/js/authorisation.js"])
    .pipe(gulp.dest("build/js"));
});

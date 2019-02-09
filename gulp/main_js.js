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
  return gulp.src("source/js/home_js.js")
    .pipe(gulp.dest("build/js"));
});

gulp.task("js_babel", function () {
  return gulp.src("source/js/demo_js.js")
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(gulp.dest("build/js"));
});
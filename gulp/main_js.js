var gulp = require("gulp");
var concat = require("gulp-concat");


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

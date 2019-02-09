var gulp = require("gulp");

gulp.task("php", function () {
  return gulp.src("source/php/*.php")
    .pipe(gulp.dest("build/php"));
});

var gulp = require("gulp");
var del = require("del");

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/*.{woff, woff2}*",
      "source/img/*.+(png|jpg|svg|webp)*",
      "source/img/**/**",
      "source/js/**"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

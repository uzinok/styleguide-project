var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var htmlmin = require("gulp-htmlmin");

gulp.task("css", function () {
  return gulp.src(["source/less/style.less", "source/less/home.less"])
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(csso())
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("build"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    injectChanges: true,
    notify: true,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/js/*.js", gulp.series(["js", "js_copy", "home_js"])).on("change", server.reload);
  gulp.watch("source/*.html", gulp.series("html")).on("change", server.reload);
  gulp.watch("source/templates/*.html", gulp.series("html")).on("change", server.reload);
  gulp.watch("source/php/*.php", gulp.series("php"));
});

gulp.task("build", gulp.series("clean", "copy", "css", "js", "home_js", "js_copy", "html", "php"));
gulp.task("start", gulp.series("build", "server"));

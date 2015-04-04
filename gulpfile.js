var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    webserver = require('gulp-webserver');

gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
  .pipe(sass())
  .pipe(minifyCSS({'keepSpecialComments': 0}))
  .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('app/scss/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8080
    }));
});

gulp.task('default', ['sass', 'watch', 'webserver']);
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css');

gulp.task('sass', function() {
  return gulp.src('app/scss/*.scss')
  .pipe(sass())
  .pipe(minifyCSS({'keepSpecialComments': 0}))
  .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', function() {
  gulp.watch('app/scss/*.scss', ['sass']);
});
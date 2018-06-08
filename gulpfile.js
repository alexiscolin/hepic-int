const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');

gulp.task('html', function(){
  return gulp.src('int/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('int/build/html'))
});

gulp.task('css', function(){
  return gulp.src('int/src/style/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('int/build/css'))
});


gulp.task('default', [ 'html', 'css']);

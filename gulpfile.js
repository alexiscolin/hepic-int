const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const del = require('del');

gulp.task('clean', function(){
  del('int/build/**');
});

gulp.task('html', function(){
  del('int/build/**', {force:true});
  return gulp.src('int/src/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('int/build'))
});

gulp.task('css', function(){
  del('int/build/**', {force:true});
  return gulp.src('int/src/style/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('int/build/dist/css'))
});


gulp.task('default', ['clean', 'html', 'css']);

const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const del = require('del');

gulp.task('clean', function(){
  del.sync('int/build/**');
});

gulp.task('html', function(){
  return gulp.src('int/src/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('int/build'))
});

gulp.task('css', function(){
  return gulp.src('int/src/assets/style/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('int/build/assets/css'))
});


gulp.task('default', ['clean', 'html', 'css']);

const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const imageOptim = require('gulp-imageoptim');
const del = require('del');
const bs = require('browser-sync').create();

const int = {
  build: "./int/build",
  src: "./int/src"
};

gulp.task('clean', function(){
  del.sync(int.build + '/**');
});

gulp.task('html', function(){
  return gulp.src(int.src + '/pages/*.pug')
    .pipe(pug())
    .pipe(gulp.dest(int.build))
});

gulp.task('css', function(){
  return gulp.src(int.src + '/assets/style/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(int.build + '/assets/css'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('img', function() {
  return gulp.src(int.src + '/assets/img/**/*')
    .pipe(imageOptim.optimize())
    .pipe(gulp.dest(int.build + '/assets/img'));
});

gulp.task('sync', function() {
  bs.init({
    server: {
      baseDir: int.build
    }
  });
});



gulp.task('default', ['clean', 'html', 'img', 'css']);

gulp.task('watch', ['sync'], function(){
  gulp.watch(int.src + '/assets/style/*.less', ['css']);
  gulp.watch('int/src/assets/img/**/*', {cwd:'./'}, ['img']);
  gulp.watch(int.src + '/pages/*.pug', ['html']);
  gulp.watch(int.build + '/*.html').on('change', bs.reload);
});

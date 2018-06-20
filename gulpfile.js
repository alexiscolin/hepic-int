const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const minifyCSS = require('gulp-csso');
const sourcemaps = require('gulp-sourcemaps');
const imageOptim = require('gulp-imageoptim');
const del = require('del');
const critical = require('critical').stream;
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
  return gulp.src(int.src + '/assets/style/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(int.build + '/assets/css'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('cssProd', function(){
  return gulp.src(int.src + '/assets/style/**/*.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest(int.build + '/assets/css'))
});

gulp.task('img', function() {
  return gulp.src(int.src + '/assets/img/**/*')
    .pipe(imageOptim.optimize())
    .pipe(gulp.dest(int.build + '/assets/img'));
});

gulp.task('fonts', function() {
   gulp.src(int.src + '/assets/fonts/**/*.{ttf,woff,woff2,eof,svg}')
   .pipe(gulp.dest(int.build + '/assets/fonts'));
});

gulp.task('critical', function() {
  return  gulp.src(int.build + '/*.html')
    .pipe(critical({
      base: int.build,
      inline: true,
      width: 320,
      height: 480,
      minify: true
    }))
    .pipe(gulp.dest(int.build));
});

gulp.task('sync', function() {
  bs.init({
    server: {
      baseDir: int.build
    }
  });
});



gulp.task('default', ['clean', 'html', 'img', 'fonts', 'css']);
gulp.task('build', ['clean', 'html', 'cssProd', 'img', 'fonts', 'critical']);

gulp.task('watch', ['sync'], function(){
  gulp.watch(int.src + '/assets/style/**/*.less', ['css']);
  gulp.watch('int/src/assets/img/**/*', {cwd:'./'}, ['img']);
  gulp.watch('int/src/assets/fonts/**/*.{ttf,woff,woff2,eof,svg}', {cwd:'./'}, ['fonts']);
  gulp.watch(int.src + '/**/*.pug', ['html']);
  gulp.watch(int.build + '/*.html').on('change', bs.reload);
});

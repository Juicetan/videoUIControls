var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var replace = require('gulp-replace');
var flatten = require('gulp-flatten');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var fs = require('fs');

gulp.task('clean', function(){
  return del([
    './.tmp',
    './dist'
  ]);
});

gulp.task('buildCSS', function(){
  return gulp.src('./app/**/*.scss')
      .pipe(sass())
      .pipe(prefix("last 2 versions"))
      .pipe(flatten())
      .pipe(minifyCSS())
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./.tmp/app/base/css'));
});

gulp.task('buildContentScript', function(){
  var styleStr = fs.readFileSync('./.tmp/app/base/css/style.min.css');

  return gulp.src('./content.js')
      .pipe(replace(/<!-- tid:(.+?) -->/i, styleStr))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('build', gulp.series('buildCSS','buildContentScript', function(done){
  done();
}));

gulp.task('watchChanges',function(){
  gulp.watch('./app/**/*',gulp.series('build',function(done){
    done();
  }));
});

gulp.task('serve',gulp.series('clean','build','watchChanges', function(done){
  done();
}));
let gulp = require('gulp'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssNano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function(){
  browserSync.init({
    notify: false,
    server:{
      baseDir: "docs"
    }
  });
});

gulp.task('deleteDistFolder',function(){
  return del('./docs');
});

gulp.task('usemin', ['deleteDistFolder', 'styles','scripts'], function(){
    return gulp.src('./app/index.html')
    .pipe(usemin({
      css :[function(){
        return rev()
      },
      function(){
        return cssNano()
      }],
      js: [function(){
        return rev()
      },
      function(){
        return uglify()
      }]
    }))
    .pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'usemin']);

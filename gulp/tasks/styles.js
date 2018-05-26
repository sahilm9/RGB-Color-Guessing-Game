let gulp = require('gulp'),
postCSS = require('gulp-postcss'),
autoPrefixer = require('autoprefixer'),
cssVars = require('postcss-simple-vars'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postCSS([cssImport,mixins,cssVars,autoPrefixer({ browsers: ["> 0%"] })]))
  .on('error', function(errorInfo){
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});

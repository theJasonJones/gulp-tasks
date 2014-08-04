var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');

gulp.task('imagemin', function() {
  var imgSrc = 'Phone Numbers/*',
      imgDst = 'Pictures/min/images/Phone Numbers';
 
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

gulp.task('css', function(){
	return gulp.src('css/main.css')
		.pipe(autoprefixer('last 15 version'))
		.pipe(minifycss())
		.pipe(gulp.dest('css/min'))
		.pipe(notify({message: 'Finished with CSS.'}));
})

gulp.task('default', function(){
	gulp.run('imagemin');
	gulp.run('css');
})

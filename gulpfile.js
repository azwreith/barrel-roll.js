var gulp = require('gulp'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

gulp.task('minify-js', function() {
	return gulp.src('/src/barrel-roll.js')
		.pipe(gulp.dest('/dist'))
		.pipe(rename('barrel-roll-min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('/dist'));
});

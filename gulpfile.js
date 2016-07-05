var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	sass = require("gulp-ruby-sass");
	
//Uglify Scripts Task
gulp.task("scripts", function() {
	gulp.src("js/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("minjs"));
});

//Uglify Styles Task
gulp.task("styles", function() {
	return sass('css/*.scss', {
	  style: 'compressed'
	})
	.pipe(gulp.dest('css/'));
});

//Watch Scripts Task
gulp.task("watch", function() {
	gulp.watch("js/*.js", ["scripts"]);
	gulp.watch("css/*.scss", ["styles"]);
});

gulp.task("default", ["scripts", "styles", "watch"]);
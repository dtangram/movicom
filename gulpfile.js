var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	sass = require("gulp-ruby-sass"),
	minifyCSS = require("gulp-minify-css"),
	plumber = require("gulp-plumber"),
	concat = require("gulp-concat");
	
//Concat Styles Task
gulp.task("concat", function() {
	return gulp.src(["css/parallax.css", "css/indexParallax.css"])
	.pipe(concat("styles.css"))
	.pipe(concat("minifiedstyles.css"))
	.pipe(gulp.dest("css/"))
});
	
//Uglify Scripts Task
gulp.task("scripts", function() {
	gulp.src("js/*.js")
	.pipe(plumber())
	.pipe(uglify())
	.pipe(gulp.dest("minjs"));
});

//Uglify Styles Task
gulp.task("styles", function() {
	return sass("css/*.scss", {
	  /*style: 'compressed'*/
	  style: "expanded"
	})
	.pipe(plumber())
	.pipe(gulp.dest("css/"));
});

//Minify Styles Task
gulp.task("minify-css", function() {
	return gulp.src("css/minifiedstyles.css")
	.pipe(plumber())
	.pipe(minifyCSS())
	.pipe(gulp.dest("css"));
});

//Watch Tasks
gulp.task("watch", function() {
	gulp.watch("js/*.js", ["scripts"]);
	gulp.watch("css/*.scss", ["styles"]);
});

gulp.task("default", ["concat", "scripts", "styles", "minify-css", "watch"]);
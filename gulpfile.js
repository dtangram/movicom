var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	sass = require("gulp-ruby-sass"),
	minifyCSS = require("gulp-minify-css"),
	plumber = require("gulp-plumber"),
	concat = require("gulp-concat");

//Concat Script Task
gulp.task("concatJS", function() {
	return gulp.src("js/panelRotatePara.js")
	.pipe(plumber())
	.pipe(concat("movi-scripts.js"))
	.pipe(gulp.dest("js"))
});

//Concat Styles Task
gulp.task("concatCSS", function() {
	return gulp.src(["css/parallax.css", "css/indexParallax.css"])
	.pipe(plumber())
	.pipe(concat("styles.css"))
	.pipe(gulp.dest("css"))
});
	
//Uglify Scripts Task
gulp.task("scripts", function() {
	return gulp.src("js/panelRotatePara.js")
	.pipe(plumber())
	.pipe(concat("mini-scripts.js"))
	.pipe(uglify())
	.pipe(gulp.dest("js"));
});

//Uglify Styles Task
gulp.task("styles", function() {
	return sass("css/*.scss", {
	  /*style: 'compressed'*/
	  style: "expanded"
	})
	.pipe(plumber())
	.pipe(gulp.dest("css"));
});

//Minify Styles Task
gulp.task("minify-css", function() {
	return gulp.src(["css/parallax.css", "css/indexParallax.css"])
	.pipe(plumber())
	.pipe(concat("minifiedstyles.css"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("css"))
});

//Minify Styles Task
/*gulp.task("minify-css", function() {
	return gulp.src("css/minifiedstyles.css", {
	  style: "compressed"
	})
	.pipe(plumber())
	.pipe(concat("minifiedstyles.css"))
	.pipe(minifyCSS())
	.pipe(gulp.dest("css"));
});*/

//Watch Tasks
gulp.task("watch", function() {
	gulp.watch("js/*.js", ["concatJS"]);
	gulp.watch("css/*.css", ["concatCSS"]);
	gulp.watch("js/*.js", ["scripts"]);
	gulp.watch("css/*.scss", ["styles"]);
	gulp.watch("css/*.css", ["minify-css"]);
});

gulp.task("default", ["watch", "concatJS", "concatCSS", "scripts", "styles", "minify-css"]);
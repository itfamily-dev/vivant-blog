const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-csso");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const rename = require("gulp-rename");


// Paths
var paths = {

	root: 'build',

	scss: {
		src: "scss/**/*",
		main: "scss/style.scss",
	},

	js: {
		src: "js/*.js",
	},

	build: "build",
};


function css() {
	return src(paths.scss.main, { sourcemaps: true })
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(rename("frontend.css"))
		.pipe(dest(paths.root), { sourcemaps: true })
}


function js() {
	return src(paths.js.src, { sourcemaps: true })
		.pipe(
			babel({
				presets: ["@babel/env"],
			})
		)
		.pipe(concat("build.min.js"))
		.pipe(rename("frontend.js"))
		.pipe(dest(paths.build, { sourcemaps: true }));
}

watch([paths.scss.src,paths.js.src], css);

exports.css = css;
exports.js = js;

exports.default = series(css, js);
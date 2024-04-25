const gulp = require('gulp');
const tinify = require('gulp-tinify');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const apiKey = 'KvwBMg5TGfwv9xTjfFN0ddcWFYj8Hjw4'

function compileSass() {
    console.log('Compiling Sass files...');
    return gulp.src('layout-projec/src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

function compressImages() {
    console.log('Compressing images...');
    return gulp.src('layout-projec/src/img/**/*')
        .pipe(tinify(apiKey))
        .pipe(gulp.dest('dist/img'));
}

function minifyJS() {
    console.log('Minifying JS files...');
    return gulp.src('layout-projec/src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
}

exports.default = gulp.series(compileSass, gulp.parallel(compressImages, minifyJS));

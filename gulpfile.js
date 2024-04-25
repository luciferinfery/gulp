const { src, dest, watch, series } = require('gulp');
const tinify = require('gulp-tinify');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    console.log('Compiling Sass files...');
    return src('layout-projec/src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
}

function compressImages() {
    console.log('Compressing images...');
    return src('layout-projec/src/img/**/*')
        .pipe(tinify('p0m2l0vQvpGqZhjcJnSzTbxjM0KfFhW8'))
        .pipe(dest('dist/img'));
}

function minifyJS() {
    console.log('Minifying JS files...');
    return src('layout-projec/src/js/**/*.js')
        .pipe(uglify())
        .pipe(dest('dist/js'));
}

function watchFiles() {
    watch('layout-projec/src/sass/**/*.scss', compileSass);
    watch('layout-projec/src/img/**/*', compressImages);
    watch('layout-projec/src/js/**/*.js', minifyJS);
}

exports.default = series(compileSass, compressImages, minifyJS, watchFiles);

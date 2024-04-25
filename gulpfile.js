const { src, dest, parallel, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const browserSyncJob = () => {
    browserSync.init({
        server: "build/"
    });
};

const buildSass = () => {
    console.log('Компиляция SASS');

    return src('dist/scss/*.scss')
        .pipe(sass())
        .pipe(dest('build/styles/'))
        .pipe(browserSync.stream());
}

const buildPug = () => {
    console.log('Компиляция Pug');

    return src('dist/pages/*.pug')
        .pipe(pug())
        .pipe(dest('build/'))
        .pipe(browserSync.stream());
}

const development = series(parallel(buildSass, buildPug), browserSyncJob);

exports.development = development;
exports.server = browserSyncJob;
exports.build = parallel(buildSass, buildPug);

const gulp = require('gulp');

gulp.task('html', function() {
    return gulp.src('layout-project/src/html/**/*.html')
        .pipe(gulp.dest('layout-project/dist/html'));
});

gulp.task('css', function() {
    return gulp.src('layout-project/src/css/**/*.css')
        .pipe(gulp.dest('layout-project/dist/css'));
});

gulp.task('js', function() {
    return gulp.src('layout-project/src/js/**/*.js')
        .pipe(gulp.dest('layout-project/dist/js'));
});

gulp.task('img', function() {
    return gulp.src('layout-project/src/img/**/*')
        .pipe(gulp.dest('layout-project/dist/img'));
});

gulp.task('fonts', function() {
    return gulp.src('add/fonts/**/*')
        .pipe(gulp.dest('layout-project/dist/fonts'));
});

gulp.task('data', function() {
    return gulp.src('add/data/**/*')
        .pipe(gulp.dest('layout-project/dist/data'));
});

gulp.task('default', gulp.parallel('html', 'css', 'js', 'img', 'fonts', 'data'));

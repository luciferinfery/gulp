const gulp = require('gulp');

gulp.task('html', function() {
    return gulp.src('layout-projec/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src('layout-projec/**/*.css')
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
    return gulp.src('layout-projec/**/*.js')
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.parallel('html', 'css', 'js'));
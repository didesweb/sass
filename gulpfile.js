var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
var plumber = require('gulp-plumber');
var minifycss = require('gulp-minify-css');

gulp.task('browser-sync', function() {
    var files = [
    'app/styles/**/*',
    'assets/styles/**/*'
    ];
    browserSync.init(files, {
    proxy: "localhost/testing-gulpc/",
    notify: false
    });
});

gulp.task('sass', function () {
    return gulp.src('assets/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(minifycss())
    .pipe(gulp.dest('app/styles'))
    .pipe(reload({stream:true}));
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("assets/styles/**/*.scss", ['sass']);
});

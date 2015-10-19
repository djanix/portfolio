'use strict';

var gulp = require('gulp');
var transform = require('vinyl-transform');
var plugins = require('gulp-load-plugins')();

plugins.browserSync = require('browser-sync').create();

gulp.task('default', ['serve']);

//gulp.task('serve', require('./gulp-tasks/serve')(gulp, plugins));
gulp.task('sass', require('./gulp-tasks/sass')(gulp, plugins));
gulp.task('scripts', require('./gulp-tasks/scripts')(gulp, plugins));

gulp.task('serve', ['sass', 'scripts'], function() {
    plugins.browserSync.init({
        server: {
            baseDir: "./app"
        },
        open: false
    });

    gulp.watch("app/assets/src/css/**/*.scss", ['sass']);
    gulp.watch("app/assets/src/js/**/*.js", ['scripts']);
    gulp.watch("app/**/*.html").on('change', plugins.browserSync.reload);
});
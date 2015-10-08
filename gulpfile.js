'use strict';

var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');

var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var autoprefixer = require('gulp-autoprefixer');

var browserify = require('gulp-browserify');



gulp.task('default', ['serve']);

gulp.task('serve', ['sass', 'scripts'], function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        open: false
    });

    gulp.watch("app/assets/src/css/**/*.scss", ['sass']);
    gulp.watch("app/assets/src/js/**/*.scss", ['scripts']);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src(['app/assets/src/css/main.scss'])
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('app/assets/dest/css/'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    gulp.src('app/assets/src/js/boot.js')
        .pipe(browserify({
            transform: [
                'babelify',
                'debowerify', 'decomponentify', 'deamdify', 'deglobalify'
            ],
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('app/assets/dest/js/'))
});
module.exports = function (gulp, plugins) {
    return function () {
        gulp.src('app/assets/src/js/boot.js')
            .pipe(plugins.browserify({
                transform: [
                    'babelify',
                    'debowerify', 'decomponentify', 'deamdify', 'deglobalify'
                ],
                insertGlobals : true
                //debug : !gulp.env.production
            }))
            .pipe(gulp.dest('app/assets/dest/js/'))
            .pipe(plugins.browserSync.stream());
    };
};
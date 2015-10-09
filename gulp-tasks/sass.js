var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

module.exports = function (gulp, plugins) {
    return function () {
        gulp.src(['app/assets/src/css/main.scss'])
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.sassGlob())
            .pipe(plugins.sass({outputStyle: 'compressed'}))
            .pipe(plugins.postcss([
                autoprefixer({browsers: ['last 2 versions', '> 5%', 'Firefox ESR']}),
                mqpacker,
                csswring
            ]))
            .pipe(plugins.sourcemaps.write('./'))
            .pipe(gulp.dest('app/assets/dest/css/'))
            .pipe(plugins.browserSync.stream());
    };
};
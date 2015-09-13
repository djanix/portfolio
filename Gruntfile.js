module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(
        grunt.loadNpmTasks
    );

    var config = {
        banner: '<%= pkg.name %> - <%= pkg.version %>\n' +
                '<%= pkg.author.name %> - <%= pkg.author.url %>\n' +
                'Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %>',
        basePath: 'app',
        cacheBreaker: '<%= ((new Date()).valueOf().toString()) + (Math.floor((Math.random()*1000000)+1).toString()) %>',
        cssSrc: '<%= basePath %>/assets/src/css',
        cssDest: '<%= basePath %>/assets/dest/css',
        htmlFileExtension: 'html',
        imgPath: '<%= basePath %>/assets/img',
        jsSrc: '<%= basePath %>/assets/src/js',
        jsDest: '<%= basePath %>/assets/dest/js',
        pkg: grunt.file.readJSON('package.json'),
        vhost: 'portfolio.local'
    };

    require('load-grunt-config')(grunt, {
        data: config,
        loadGruntTasks: {
            config: require('./package.json'),
            pattern: 'grunt-*',
            scope: 'devDependencies'
        }
    });

    grunt.registerTask('default', ['build:css', 'build:js', 'browserSync', 'penthouse', 'codekit', 'watch']);
    grunt.registerTask('deploy', ['build:css', 'build:js', 'replace:cache_break']);

    grunt.registerTask('build:css', ['sprite', 'sass_imports', 'replace:scss_import_path', 'sass', 'postcss']);
    grunt.registerTask('build:js', ['jshint', 'browserify']);
    grunt.registerTask('imageMin', ['imagemin']);
};
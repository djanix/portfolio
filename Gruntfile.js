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
        cssSrc: '<%= basePath %>/assets/css/src',
        cssDest: '<%= basePath %>/assets/css/dest',
        htmlFileExtension: 'html',
        jsSrc: '<%= basePath %>/assets/js/src',
        jsDest: '<%= basePath %>/assets/js/dest',
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

    grunt.registerTask('default', ['build:js', 'build:css', 'browserSync', 'watch']);
    grunt.registerTask('deploy', ['browserify:prod', 'uglify', 'build:css', 'replace:cache_break']);

    grunt.registerTask('build:css', ['sass_imports', 'replace:scss_import_path', 'sass', 'postcss']);
    grunt.registerTask('build:js', ['jshint', 'browserify:dev']);
};
module.exports = function(grunt) {
	var portfolioConfig = {
		app: 'app',
		jsSrc: 'js/src',
		jsDest: 'js/dest',
		cssSrc: 'css/src',
		cssDest: 'css/dest'
	};

	grunt.initConfig({
		portfolio: portfolioConfig,
		pkg: grunt.file.readJSON('package.json'),
		banner: '/* <%= pkg.name %> - <%= pkg.version %>\n' +
			'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
			'* Copyright (c) <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.author.name %> - <%= pkg.author.url %> */\n\n',
		jshint: {
			files: ['<%= portfolio.app %>/<%= portfolio.jsSrc %>/*.js']
		},
		less: {
			options: {
				yuicompress: true
			},
			files: {
				src: "<%= portfolio.app %>/<%= portfolio.cssSrc %>/style.less",
				dest: "<%= portfolio.app %>/<%= portfolio.cssDest %>/style.css"
			}
		},
		uglify: {
			options: {
				banner: '<%= banner %>',
				mangle: false,
				sourceMap: '<%= portfolio.app %>/<%= portfolio.jsDest %>/main.map.js'
			},
			dev: {
				src: ['<%= portfolio.app %>/<%= portfolio.jsSrc %>/*.js'],
				dest: '<%= portfolio.app %>/<%= portfolio.jsDest %>/main.min.js'
			},
			live: {
				src: ['<%= portfolio.app %>/<%= portfolio.jsSrc %>/*.js'],
				dest: '<%= portfolio.app %>/<%= portfolio.jsDest %>/main.min.live.js'
			}
		},
		watch: {
			js: {
				files: ['<%= portfolio.app %>/<%= portfolio.jsSrc %>/*.js',],
				tasks: ['jshint', 'uglify']
			},
			less: {
				files: ["<%= portfolio.app %>/css/src/*.less", "<%= portfolio.app %>/css/src/**/*.less"],
				tasks: ['less']
			}
		}
//		htmlmin: {
//			options: {
//				collapseWhitespace: true,
//				removeComments: true
//			},
//			files: {
//				src: '<%= portfolio.app %>/index.html',
//				dest: '<%= portfolio.app %>/index.min.html'
//			}
//		},
//		compress: {
//			main: {
//				options: {
//					mode: 'gzip'
//				},
//				expand: true,
//				cwd: '<%= portfolio.app %>/',
//				src: ['**/*'],
//				dest: 'public/'
//			}
//		},
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
//	grunt.loadNpmTasks('grunt-contrib-htmlmin');
//	grunt.loadNpmTasks('grunt-contrib-compress');

	grunt.registerTask('default', ['jshint', 'uglify', 'less', 'watch'/*, 'htmlmin', 'compress'*/ ]);
};
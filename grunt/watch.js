module.exports = {
    js: {
        files: ['<%= jsSrc %>/**/*.js'],
        tasks: ['build:js']
    },
    sass: {
        files: ["<%= cssSrc %>/**/*.scss"],
        tasks: ['build:css']
    },
    html: {
        files: ['<%= basePath %>/index_src.html'],
        tasks: ['critical']
    },
    sprite: {
        files: ["<%= imgPath %>/design/sprite/*.png"],
        tasks: ['sprite', 'build:css']
    },
    options: {
        spawn: false
    }
};
module.exports = {
    js: {
        files: ['<%= jsSrc %>/**/*.js'],
        tasks: ['build:js']
    },
    sass: {
        files: ["<%= cssSrc %>/**/*.scss"],
        tasks: ['build:css', 'build:html']
    },
    html: {
        files: ['<%= basePath %>/partials/**/*.kit'],
        tasks: ['build:html']
    },
    sprite: {
        files: ["<%= imgPath %>/design/sprite/*.png"],
        tasks: ['sprite', 'build:css', 'build:html']
    },
    options: {
        spawn: false
    }
};
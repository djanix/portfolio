module.exports = {
//            js: {
//                files: ['<%= config.jsDest %>/**/*.js'],
//                tasks: ['build:js']
//            },
    sass: {
        files: ["<%= cssSrc %>/**/*.scss"],
        tasks: ['build:css']
    },
    options: {
        spawn: false
    }
};
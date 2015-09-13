module.exports = {
    files: [
        '<%= jsSrc %>/**/*.js',
        '!<%= jsSrc %>/lib/*.js'
    ],
    options: {
        force: true,
        esnext: true
    }
};
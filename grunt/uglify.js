module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= jsDest %>',
            src: '**/*.js',
            dest: '<%= jsDest %>/'
        }]
    }
};
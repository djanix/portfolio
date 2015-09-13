module.exports = {
    dist: {
        options: {
            removeComments: true,
            collapseWhitespace: true,
            minifyJS: true
        },
        files: {
            '<%= basePath %>/index.html': '<%= basePath %>/index.html'
        }
    }
};
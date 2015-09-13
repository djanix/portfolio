module.exports = {
    cache_break: {
        src: ['<%= basePath %>/partials/main.kit'],
        overwrite: true,
        replacements: [
            {
                from: /cacheBreak: \".*\"/g,
                to: 'cacheBreak: "<%= cacheBreaker %>"'
            },
            {
                from: /\.css.*/g,
                to: '.css?v=<%= cacheBreaker %>"/>'
            },
            {
                from: /\.js.*?"/g,
                to: '.js?v=<%= cacheBreaker %>"'
            }
        ]
    },
    scss_import_path: {
        src: ['<%= cssDest %>/*.scss'],
        overwrite: true,
        replacements: [
            {
                from: /\\/g,
                to: '/'
            }
        ]
    }
};
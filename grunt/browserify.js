module.exports = {
    dev: {
        files: {
            '<%= jsDest %>/App.js': '<%= jsSrc %>/App.js'
        },
        options: {
            transform: ['browserify-shim'],
            watch: true
        }
    },
    prod: {
        files: {
            '<%= jsDest %>/App.js': '<%= jsSrc %>/App.js'
        },
        options: {
            transform: ['browserify-shim']
        }
    }
};
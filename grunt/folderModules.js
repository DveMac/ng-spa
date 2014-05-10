module.exports = {
    build: {
        options: {
            base: 'src',
            src: 'app',
            dest: 'build/src',
            include: {
                '.js': true,
                '.tpl.html': 'html2js'
            },
            exclude: ['*.spec.js']
        }
    }
};
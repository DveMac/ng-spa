var grunt = require('grunt');

function filterFor(pattern, files) {
    return files.filter(function (file) {
        return file.match(pattern);
    });
}

/**
 * The index.html template includes the stylesheet and javascript sources
 * based on dynamic names calculated in this Gruntfile. This task assembles
 * the list into variables for the template to use and then runs the
 * compilation.
 */
grunt.registerMultiTask('index', 'Process index.html template', function () {
    var dirRE = new RegExp('^(' + grunt.config('build_dir') + '|' + grunt.config('compile_dir') + ')\/', 'g');
    var jsFiles = filterFor(/\.js$/, this.filesSrc).map(function (file) {
        return file.replace(dirRE, '');
    });
    var cssFiles = filterFor(/\.css$/, this.filesSrc).map(function (file) {
        return file.replace(dirRE, '');
    });

    grunt.file.copy('src/index.html', this.data.dir + '/index.html', {
        process: function (contents) {
            return grunt.template.process(contents, {
                data: {
                    scripts: jsFiles,
                    styles: cssFiles,
                    version: grunt.config('package.version')
                }
            });
        }
    });
});


/**
 * The `index` task compiles the `index.html` file as a Grunt template. CSS
 * and JS files co-exist here but they get split apart later.
 */

module.exports = {

    /**
     * During development, we don't want to have wait for compilation,
     * concatenation, minification, etc. So to avoid these steps, we simply
     * add all script files directly to the `<head>` of `index.html`. The
     * `src` property contains the list of included files.
     */
    build: {
        dir: '<%= build_dir %>',
        src: [
            '<%= vendor_files.js %>',
            '<%= build_dir %>/src/**/*.js',
            '<%= html2js.common.dest %>',
            '<%= html2js.app.dest %>',
            '<%= vendor_files.css %>',
            '<%= build_dir %>/assets/<%= package.name %>-<%= package.version %>.css'
        ]
    },

    /**
     * When it is time to have a completely compiled application, we can
     * alter the above to include only a single JavaScript and a single CSS
     * file. Now we're back!
     */
    compile: {
        dir: '<%= compile_dir %>',
        src: [
            '<%= concat.compile_js.dest %>',
            '<%= vendor_files.css %>',
            '<%= build_dir %>/assets/<%= package.name %>-<%= package.version %>.css'
        ]
    }
};
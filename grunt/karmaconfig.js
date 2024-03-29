/**
 * This task compiles the karma template so that changes to its file array
 * don't have to be managed manually.
 */

var grunt = require('grunt');

function filterFor(pattern, files) {
    return files.filter(function (file) {
        return file.match(pattern);
    });
}

/**
 * In order to avoid having to specify manually the files needed for karma to
 * run, we use grunt to manage the list for us. The `karma/*` files are
 * compiled as grunt templates for use by Karma. Yay!
 */
grunt.registerMultiTask('karmaconfig', 'Process karma config templates', function () {
    var jsFiles = filterFor(/\.js$/, this.filesSrc);

    grunt.file.copy('karma/karma-unit.tpl.js', grunt.config('build_dir') + '/karma-unit.js', {
        process: function (contents) {
            return grunt.template.process(contents, {
                data: {
                    scripts: jsFiles
                }
            });
        }
    });
});

module.exports = {
    unit: {
        dir: '<%= build_dir %>',
        src: [
            '<%= vendor_files.js %>',
            '<%= test_files.js %>'
        ]
    }
};
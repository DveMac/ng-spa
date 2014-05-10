/**
 * The Karma configurations.
 */

module.exports = {
    options: {
        configFile: '<%= build_dir %>/karma-unit.js'
    },
    unit: {
        port: 9019,
        background: true
    },
    coverage: {
        singleRun: true,
        preprocessors: {
            'src/**/*.js': ['coverage']
        },
        reporters: ['coverage'],
        coverageReporter: {
            reporters: [
                { type: 'cobertura', dir: 'coverage/' },
                { type: 'html', dir: 'coverage/' }
            ]
        }
    },
    ci: {
        singleRun: true,
        reporters: ['dots', 'junit'],
        junitReporter: {
            outputFile: 'build/test-results.xml'
        }
    }
};
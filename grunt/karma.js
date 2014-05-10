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
            type: 'cobertura',
            dir: 'coverage/'
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
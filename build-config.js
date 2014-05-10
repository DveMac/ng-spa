module.exports = {

    build_dir: 'build',

    compile_dir: 'bin',

    app_files: {
        js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
        jsunit: [ 'src/**/*.spec.js' ],

        atpl: [ 'src/app/**/*.tpl.html' ],
        ctpl: [ 'src/common/**/*.tpl.html' ],

        html: [ 'src/index.html' ],
        sass: 'src/sass/main.scss'
    },

    test_files: {
        js: [
            'vendor/angular-mocks/angular-mocks.js'
        ]
    },

    vendor_files: {
        js: [
            'vendor/lodash.build.js',
            'vendor/angular/angular.js',
            'vendor/angular-module-shim/index.js',
            'vendor/angular-ui-router/release/angular-ui-router.js',
            'vendor/angular-ui-utils/modules/route/route.js'
        ],
        css: [

        ],
        assets: [

        ]
    }
};
var build_config = {

  build_dir: 'build',
  compile_dir: 'bin',

  app_files: {
    js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],
    jsunit: [ 'src/**/*.spec.js' ],

    atpl: [ 'src/app/**/*.tpl.html' ],
    ctpl: [ 'src/common/**/*.tpl.html' ],

    html: [ 'src/index.html' ],
    less: 'src/less/main.less'
  },

  test_files: {
    js: [
      'vendor/angular-mocks/angular-mocks.js'
    ]
  },

  vendor_files: {
    js: [
      'vendor/jquery/dist/jquery.js',
      'vendor/angular/angular.js',
      'vendor/angular-ui-router/release/angular-ui-router.js',
      'vendor/angular-ui-utils/modules/route/route.js'
    ],
    css: [

    ],
    assets: [

    ]
  }
};

module.exports = function (grunt) {

  // measures the time each task takes
  require('time-grunt')(grunt);

  // load grunt config
  require('load-grunt-config')(grunt, { data: build_config });

};

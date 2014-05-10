var build_config = {

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

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-config')(grunt, { data: build_config });

  grunt.renameTask("watch", "delta");

  grunt.registerTask("default", [
    "build",
    "compile"
  ]);

  grunt.registerTask("watch", [
    "build",
    "karma:unit",
    "connect:dev",
    "delta"
  ]);

  grunt.registerTask("build", [
    "clean",
    "html2js",
    "jshint",
    "sass:build",
    "concat:build_css",
    "copy:build_app_assets",
    "copy:build_vendor_assets",
    "copy:build_appjs",
    "copy:build_vendorjs",
    "index:build",
    "karmaconfig",
    "karma:ci"
  ]);

  grunt.registerTask("compile", [
    "sass:compile",
    "copy:compile_assets",
    "ngmin",
    "concat:compile_js",
    "uglify",
    "index:compile"
  ]);

};

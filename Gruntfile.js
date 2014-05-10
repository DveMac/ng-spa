module.exports = function (grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, { data: require('./build-config.js') });

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
        "jshint",
        "sass:build",
        "concat:build_css",
        "copy:build_app_assets",
        "copy:build_vendor_assets",
//        "copy:build_appjs",
        "folderModules:build",
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

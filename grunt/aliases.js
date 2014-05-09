module.exports = {

  "delta": "watch", // renameTask

  "default": [
    "build",
    "compile"
  ],

  "watch": [
    "build",
    "karma:unit",
    "connect:dev",
    "delta"
  ],

  "build": [
    "clean",
    "html2js",
    "jshint",
    "less:build",
    "concat:build_css",
    "copy:build_app_assets",
    "copy:build_vendor_assets",
    "copy:build_appjs",
    "copy:build_vendorjs",
    "index:build",
    "karmaconfig",
    "karma:ci"
  ],

  "compile": [
    "less:compile",
    "copy:compile_assets",
    "ngmin",
    "concat:compile_js",
    "uglify",
    "index:compile"
  ]

};
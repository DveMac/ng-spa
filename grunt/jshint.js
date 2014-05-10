module.exports = {
    src: [
        '<%= app_files.js %>'
    ],
    test: [
        '<%= app_files.jsunit %>'
    ],
    gruntfile: [
        'Gruntfile.js'
    ],
    options: {
        jshintrc: ".jshintrc"
    }
};
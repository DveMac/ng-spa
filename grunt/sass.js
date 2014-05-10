module.exports = {
    build: {
        files: {
            '<%= build_dir %>/assets/<%= package.name %>-<%= package.version %>.css': '<%= app_files.sass %>'
        }
    },
    compile: {
        files: {
            '<%= build_dir %>/assets/<%= package.name %>-<%= package.version %>.css': '<%= app_files.sass %>'
        },
        options: {
            style: 'compressed'
        }
    }
};
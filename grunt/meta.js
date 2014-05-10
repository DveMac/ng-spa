module.exports = {
    banner: '/**\n' +
        ' * <%= package.name %> - v<%= package.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * <%= package.homepage %>\n' +
        ' *\n' +
        ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= package.author %>\n' +
        ' * Licensed <%= package.licenses.type %> <<%= package.licenses.url %>>\n' +
        ' */\n'
};
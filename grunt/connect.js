/**
 * The `connect` task starts a connect server
 */

var connect = require('connect');

module.exports = {
    dev: {
        options: {
            port: 4000,
            middleware: [
                connect.compress(),
                connect.static('build')
            ]
        }
    },
    prod: {
        options: {
            port: 4000,
            keepalive: true,
            middleware: [
                connect.compress(),
                connect.static('bin')
            ]
        }
    }
};
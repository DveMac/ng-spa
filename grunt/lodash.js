module.exports = {
    'target': {
        'dest': 'vendor/lodash.build.js'
    },
    'options': {
        'iife': '!function(window,undefined){%output%}(this)',
        'include': ['each', 'filter', 'map', 'extend']
    }
};
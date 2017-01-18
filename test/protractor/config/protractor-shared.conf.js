var child_process = require('child_process'),
    chai = require('chai'),
    q = require('q'),
    server = child_process.spawn('node', ['test/example/server.js']);

server.stdout.pipe(process.stdout);

chai.use(require('chai-as-promised'));

exports.config = {
    allScriptsTimeout: 11000,

    baseUrl: 'http://localhost:9900/',

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    onCleanUp: function () {
        // nothing to do here
    },
    onComplete: function () {
        // nothing to do here
    },
    beforeLaunch: function () {
        // nothing to do here
    },
    afterLaunch: function () {
        // nothing to do here
    }
};

process.on('exit', function () {
    server.kill();
});
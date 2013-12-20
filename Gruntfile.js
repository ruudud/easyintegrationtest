module.exports = function(grunt) {
  grunt.initConfig({
    casperjs: {
      options: {
        casperjsOptions: ['--cookies-file=/tmp/cookies.txt'],
        verbose: true,
        loglevel: 'debug',
      },
      files: ['tests/**/*.js']
    },
  })

  grunt.registerTask('server', function () {
    var mockBackend = require("./record-replay-proxy");
  });

  grunt.registerTask('test', ['casperjs']);

  grunt.loadNpmTasks('grunt-casperjs');

  grunt.registerTask('test', ['server', 'casperjs']);

};

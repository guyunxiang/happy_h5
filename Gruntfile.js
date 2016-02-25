module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9090,
          hostname: '192.168.5.18',
          livereload: true
        }
      }
    },
    watch: {
      client: {
        files: [
          './css/*',
          './images/*',
          './js/*',
          './lib/**/*',
          './index.html'
        ],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('develop', ['connect', 'watch']);
};

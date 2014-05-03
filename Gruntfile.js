module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/bootstrap/dist/css/bootstrap.min.css',
              'bower_components/fontawesome/css/font-awesome.min.css'
            ],
            dest: 'css/vendor/'
          },
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/bootstrap/dist/js/bootstrap.min.js',
              'bower_components/jquery/dist/jquery.min.js'
            ],
            dest: 'js/vendor/'
          },
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/bootstrap/dist/fonts/*',
              'bower_components/fontawesome/fonts/*'
            ],
            dest: 'fonts/'
          },
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);

};

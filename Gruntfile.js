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
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/respond/dest/respond.min.js'
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
            dest: 'css/fonts/'
          },
        ]
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['copy', 'imagemin']);

};

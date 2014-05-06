module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      vendor: {
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
              'bower_components/jquery/dist/jquery.min.js',
              'bower_components/respond/dest/respond.min.js',
              'bower_components/html5shiv/dist/html5shiv.min.js',
              'bower_components/bootstrap/dist/js/bootstrap.min.js'
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
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'js/*.js'
      ]
    }

  });

  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['newer:copy', 'newer:imagemin', 'jshint']);

};

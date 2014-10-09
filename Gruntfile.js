module.exports = function(grunt) {

  var themePath = '_src/';

  require('time-grunt')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    autoprefixer: {
      options: {
        browsers: ['> 1%']
      },
      build: {
        files: [{
          expand: true,
          src: themePath + '/style/*.css',
          dest: ''
        }]
      }
    },
    concat: {
      vendorJS: {
        src: [
          themePath + '/scripts/vendor/jquery/*.js',
          themePath + '/scripts/vendor/*.js'
        ],
        dest: 'build/scripts/vendor.js'
      },
      fallbackJS: {
        src: themePath + '/scripts/fallback/*.js',
        dest: 'build/scripts/fallback.js'
      },
      vendorCSS: {
        src: themePath + '/style/vendor/*.css',
        dest: 'build/style/vendor.css'
      },
      buildJS: {
        src: themePath + '/scripts/*.js',
        dest: 'build/scripts/scripts.js'
      }
    },
    copy: {
      vendor: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/bootstrap/dist/css/bootstrap.css',
              'bower_components/fontawesome/css/font-awesome.css'
            ],
            dest: themePath + '/style/vendor/'
          },
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/jquery/dist/jquery.js'
            ],
            dest: themePath + '/scripts/vendor/jquery'
          },
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/jquery-ui/jquery-ui.js',
              'bower_components/bootstrap/dist/js/bootstrap.js'
            ],
            dest: themePath + '/scripts/vendor/'
          },
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/bootstrap/dist/fonts/*',
              'bower_components/fontawesome/fonts/*'
            ],
            dest: 'build/fonts/'
          }
        ]
      },
      fallback: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/respond/dest/respond.min.js',
              'bower_components/html5shiv/dist/html5shiv.min.js'
            ],
            dest: themePath + '/scripts/fallback/'
          },
        ]
      }
    },
    cssmin: {
      vendor: {
        expand: true,
        cwd: 'build/style/',
        src: ['vendor.css'],
        dest: 'build/style/',
        ext: '.min.css'
      },
      build: {
        expand: true,
        cwd: 'build/style/',
        src: ['style.css'],
        dest: 'build/style/',
        ext: '.min.css'
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{svg,png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },
    jshint: {
      build: ['Gruntfile.js', themePath + '/scripts/*.js']
    },
    sass: {
      build: {
        options: {
          style: 'nested'
        },
        files: [{
          expand: true,
          cwd: themePath + '/style',
          src: ['*.scss'],
          dest: 'build/style/',
          ext: '.css'
        }]
      }
    },
    uglify: {
      vendor: {
        files: [{
          expand: true,
          cwd: 'build/scripts/',
          src: ['vendor.js'],
          dest: 'build/scripts/',
          ext: '.min.js'
        }]
      },
      fallback: {
        files: [{
          expand: true,
          cwd: 'build/scripts/',
          src: ['fallback.js'],
          dest: 'build/scripts/',
          ext: '.min.js'
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd: 'build/scripts/',
          src: ['scripts.js'],
          dest: 'build/scripts/',
          ext: '.min.js'
        }]
      }
    },
    watch: {
      scripts: {
        files: [themePath + '/scripts/**/*.js'],
        tasks: ['jshint', 'concat:buildJS', 'uglify:build']
      },
      style: {
        files: [themePath + '/style/**/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin:build']
      },
      images: {
        files: ['images/**/*.{svg,png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'autoprefixer', 'jshint', 'concat', 'uglify', 'cssmin', 'imagemin']);
  grunt.registerTask('dev', ['build', 'watch']);
  grunt.registerTask('default', ['copy', 'build']);

};

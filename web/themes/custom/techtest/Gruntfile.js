module.exports = function(grunt) {

  // Init config.
  grunt.initConfig({

    // Register package.
    pkg: grunt.file.readJSON('package.json'),

    // Watch.
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['sass/**/*.scss'],
        tasks: ['sass:production']
      },
      css: {
        files: ['css/**/*.css']
      }
    },

    // Sass.
    sass: {
      production: {
        options: {
          sourceMap: true,
          outputStyle: 'extended',
        },
        files: {
          'css/style.css': 'sass/style.scss',
        }
      }
    },

    // Notify.
    notify: {
      css: {
        options: {
          title: 'CSS:',
          message: 'CSS has changed.'
        }
      }
    }
  });

  // Load modules.
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-text-replace');

  // Register tasks.
  grunt.registerTask('default', ['watch']);

};
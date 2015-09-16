module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['gruntfile.js', 'src/scripts/*.js']
    },
    requirejs: {
      compile: {
        options: {
          mainConfigFile:'./src/scripts/main.js',
          baseUrl: "./src/scripts",
          optimize: 'uglify',
          name: 'app',
          include: ['main'],
          findNestedDependencies: true,
          out: './main.min.js'
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './src/css',
          src: ['*.css'],
          dest: './',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      files: ['<%= jshint.files %>', 'index.html', './src/css/style.css'],
      tasks: ['jshint', 'requirejs', 'cssmin']
    },
    connect: {
      server: {
        options: {
          port: 8000,
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'requirejs', 'cssmin', 'connect']);

};

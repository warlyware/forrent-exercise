module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['gruntfile.js', 'src/scripts/*.js']
    },
    requirejs: {
      compile: {
        // !! You can drop your app.build.js config wholesale into 'options'
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
    watch: {
      files: ['<%= jshint.files %>', 'index.html', 'style.css'],
      tasks: ['jshint', 'requirejs']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'requirejs']);

};

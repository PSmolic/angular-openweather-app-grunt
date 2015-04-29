module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', 'app/js/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    copy:{
      html: {
        src: 'app/index.html', dest: 'dist/index.html'
      },
      files: {
        expand: true,
        dest: 'dist/partials',
        cwd: 'app/partials/',
        src: '*'
      },
      fonts: {
        expand: true,
        dest: 'dist/assets/fonts',
        cwd: 'app/css/bootstrap/fonts/',
        src: '*'
      }
    },
    useminPrepare: {
      options: {
        dest: "dist"
      },
      html: 'app/index.html'
    },
    usemin: {
      html:['dist/index.html'],
      css: ['dist/**/*.css']
    },
    uglify: {
      options: {
        mangle: false
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('build', ['copy:html', 'copy:files', 'copy:fonts', 'useminPrepare','concat','cssmin', 'uglify', 'usemin']);

};

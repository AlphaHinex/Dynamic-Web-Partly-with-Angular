'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: require('./bower.json').distPath || 'dist'
    };

    // this block is not works now
    var files = grunt.file.expand('WebContent/ngapp/scritps/modules/*/bootstrap.js');
    var requirejsOptions = {};

    files.forEach(function(file) {
        var filenamelist = file.split('/');
        var num = filenamelist.length;
        var filename = filenamelist[num-2];
        requirejsOptions[filename] = {
            options: {
                baseUrl: 'WebContent/ngapp/scripts',
                mainConfigFile: './main.js',
                include: './modules/' + filename + '/bootstrap',
                out: 'WebContent/ngappbuild/' + filename + '/bootstrap.js'
            }
        };
    });
    // now work block end

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        ngapp: appConfig,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: [
                    'Gruntfiles.js',
                    '<%= ngapp.app %>/scripts/**/*.js', 
                    '!<%= ngapp.app %>/scripts/vendor/**/*.js'
                ],
                tasks: ['newer:jshint:all']
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= ngapp.app %>/scripts/**/*.js',
                    '!<%= ngapp.app %>/scripts/vendor/**/*.js'
                ]
            }
        },

        clean: {
          dist: {
            files: [{
                dot: true,
                src: [ 
                    '.tmp',
                    '<%= ngapp.dist %>/**/*' 
                ]
            }]
          }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
          dist: {
            files: [{
              expand: true,
              cwd: '<%= ngapp.app %>/scripts',
              src: ['**/*.js', '!vendor/**/*.js'],
              dest: '.tmp/scripts'
            }]
          }
        },

        requirejs: {
            demo: {
                options: {
                    baseUrl: '.tmp/scripts',
                    include: './modules/demo/bootstrap',
                    out: '<%= ngapp.dist %>/scripts/modules/demo/bootstrap.js'
                }
            }
        }

    });

    grunt.registerTask('js', ['clean', 'ngAnnotate', 'requirejs']);

};
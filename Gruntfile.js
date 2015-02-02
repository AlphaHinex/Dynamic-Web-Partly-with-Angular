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

    // one requirejs task per folder under apps
    var files = grunt.file.expand('WebContent/ngapp/scripts/apps/**/bootstrap.js');
    var requirejsOptions = {};
    files.forEach(function(file) {
        var allPaths = file.split('/');
        var fromIdx = allPaths.indexOf('apps') + 1;
        var toIdx = -1;
        var parentFolders = allPaths.slice(fromIdx, toIdx);
        requirejsOptions[parentFolders.join('-')] = {
            options: {
                baseUrl: '.tmp/scripts',
                include: './apps/' + parentFolders.join('/') + '/bootstrap',
                out: '<%= ngapp.dist %>/scripts/apps/' + parentFolders.join('/') + '/bootstrap.js'
            }
        };
    });

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        ngapp: appConfig,

        // copy bower installed components to dist folder
        bower: {
            dev: {
                dest: '<%= ngapp.app %>/vendor/',
                js_dest: '<%= ngapp.app %>/scripts/vendor/',
                css_dest: '<%= ngapp.app %>/styles/vendor/',
                options: {
                    expand: true,
                    ignorePackages: ['jquery'],
                    packageSpecific: {
                        'bootstrap': {
                            keepExpandedHierarchy: false,
                            files: ['dist/css/bootstrap.css']
                        },
                        'angular-ui-grid': {
                            keepExpandedHierarchy: false,
                            files: ['./ui-grid.js', './ui-grid.css']
                        }
                    }
                }
            }
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: [
                    '<%= ngapp.app %>/scripts/**/*.js', 
                    '!<%= ngapp.app %>/scripts/vendor/**/*.js',
                    '<%= ngapp.app %>/scripts/vendor/ares/**/*.js',
                    '<%= ngapp.app %>/scripts/vendor/requirejs-domready-nodefine/*.js'
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

        cssmin: {
          dist: {
            files: [{
                expand: true,
                cwd: '<%= ngapp.app %>/styles',
                src: ['**/*.css'],
                dest: '<%= ngapp.dist %>/styles'
            }]
          }
        },

        uglify: {
          dist: {
            files: [{
                expand: true,
                cwd: '<%= ngapp.app %>/scripts',
                src: [
                    'main.js',
                    'vendor/**/*.js'
                ],
                dest: '<%= ngapp.dist %>/scripts'
            }]
          }
        },

        htmlmin: {
          dist: {
            options: {
              collapseWhitespace: true,
              conservativeCollapse: true,
              collapseBooleanAttributes: true,
              removeCommentsFromCDATA: true,
              removeOptionalTags: true
            },
            files: [{
              expand: true,
              cwd: '<%= ngapp.app %>/views',
              src: ['**/*.html'],
              dest: '<%= ngapp.dist %>/views'
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

        requirejs: requirejsOptions

    });

    grunt.registerTask('min:static', ['cssmin', 'uglify', 'htmlmin', 'ngAnnotate', 'requirejs']);

    grunt.registerTask('build:static', ['clean', 'min:static']);

};
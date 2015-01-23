'use strict';

module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
    };

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
        }

    });

};
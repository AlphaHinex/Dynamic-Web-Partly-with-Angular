'use strict';

require.config({
    baseUrl: './ngapp/scripts',
    paths: {
        domReady: 'vendor/requirejs-domready/domReady',
        angular: 'vendor/angular/angular'
    },
    shim: {
        // could not require 'angular' if not use next line
        'angular': {'exports': 'angular'}
    }
});
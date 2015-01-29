'use strict';

define(['modules/demo/main/main', 'controllers/demo/main/mainCtrl'], 
    function() {
        domReady(function() {
            angular.bootstrap(document.getElementById('mainDiv'), ['demo-main-main']);
        });
    }
);
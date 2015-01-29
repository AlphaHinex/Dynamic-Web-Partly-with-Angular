'use strict';

define(['apps/demo/main/modules/mainModule', 'apps/demo/main/controllers/mainCtrl'], 
    function() {
        domReady(function() {
            angular.bootstrap(document.getElementById('mainDiv'), ['demo-main-main']);
        });
    }
);
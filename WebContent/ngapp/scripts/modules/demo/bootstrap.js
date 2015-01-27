'use strict';

define(['modules/demo/portlet', 'controllers/demo/portletCtrl'], 
    function() {
        domReady(function() {
            angular.bootstrap(document.getElementById('portlet1'), ['portlet']);
            angular.bootstrap(document.getElementById('portlet2'), ['portlet']);
        });
    }
);
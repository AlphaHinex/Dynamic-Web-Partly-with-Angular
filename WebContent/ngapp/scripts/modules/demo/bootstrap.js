'use strict';

define(['angular', 'domReady', 'modules/demo/portlet', 'controllers/demo/portletCtrl'], 
    function(angular, domReady) {
        domReady(function() {
            angular.bootstrap(document.getElementById('portlet1'), ['portlet']);
            angular.bootstrap(document.getElementById('portlet2'), ['portlet']);
        });
    }
);
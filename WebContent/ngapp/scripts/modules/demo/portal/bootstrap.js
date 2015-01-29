'use strict';

define(['modules/demo/portal/portlet', 'controllers/demo/portal/portletCtrl'], 
    function() {
        domReady(function() {
            angular.bootstrap(document.getElementById('portlet1'), ['demo-portal-portlet']);
            angular.bootstrap(document.getElementById('portlet2'), ['demo-portal-portlet']);
        });
    }
);
'use strict';

define(['apps/demo/portal/portletModule', 'apps/demo/portal/portletCtrl'], 
    function() {
        domReady(function() {
            angular.bootstrap(document.getElementById('portlet1'), ['demo-portal-portlet']);
            angular.bootstrap(document.getElementById('portlet2'), ['demo-portal-portlet']);
        });
    }
);
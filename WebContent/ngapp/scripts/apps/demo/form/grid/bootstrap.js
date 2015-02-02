'use strict';

define(['apps/demo/form/grid/gridModule', 'apps/demo/form/grid/gridCtrl'], 
    function() {
        domReady(function() {
            angular.bootstrap(document.getElementById('basicGrid'), ['demo-form-grid']);
        });
    }
);
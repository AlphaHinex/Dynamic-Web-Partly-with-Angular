'use strict';

define(['apps/demo/form/grid/gridModule'], 
    function() {
        domReady(function() {
            angular.bootstrap(document.getElementById('basicGrid'), ['demo-form-grid']);
        });
    }
);
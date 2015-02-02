'use strict';

define(['apps/demo/form/grid/gridModule'], function(module) {

    module.controller('BasicGridCtrl', function($scope) {
        $scope.gridData = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            },
            {
                "firstName": "中",
                "lastName": "文",
                "company": "东软",
                "employed": true
            }
        ];
    });
        
});

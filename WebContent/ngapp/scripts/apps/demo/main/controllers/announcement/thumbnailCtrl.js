'use strict';

define([
    'apps/demo/main/modules/mainModule',
    'apps/demo/main/services/picPlaceholderService'
  ],
  
  function(main) {
    main.controller('ThumbnailCtrl', ['$scope', 'PicPlaceholderService', function($scope, service) {
      var tb1 = $scope.tb1 = [];
      for (var i = 0; i < 2; i++) {
        service.addPic(tb1, 600 + tb1.length + 1, 300);
      }

      var tb2 = $scope.tb2 = [];
      for (var i = 0; i < 4; i++) {
        service.addPic(tb2, 300, 600 + tb2.length + 1);
      }
    }]);
  }

);
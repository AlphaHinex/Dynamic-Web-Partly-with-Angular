'use strict';

define(['modules/demo/main/main'], function(main) {
  main.service('PicPlaceholderService', function () {
    var self = this;
    self.addPic = function(collection, width, height) {
      collection.push({
        src: 'http://placekitten.com/' + width + '/' + height,
        src2: 'http://placekitten.com/' + (height+1) + '/' + height,
        alt: ['More','Extra','Lots of','Surplus'][collection.length % 4],
        label: ['Cats', 'Kittys', 'Felines', 'Cutes'][collection.length % 4],
        summary: ['Angular', 'Spine', 'Ember', 'Backbone'][collection.length % 4]
      });
    };
  });
});
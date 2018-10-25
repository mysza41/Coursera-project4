(function() {
'use strict';

angular.module('MenuApp')
.controller('CategoryDetailController', CategoryDetailController);

CategoryDetailController.$inject = ['$stateParams', 'items'];

function CategoryDetailController($stateParams, items) {
  var controller = this;
  controller.category = $stateParams.categoryShortname;
  controller.items = items;
}
})();

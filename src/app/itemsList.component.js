(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/app/templates/category-detail.template.html',
  bindings: {
    items: '<'
  }
});
})();

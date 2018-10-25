(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesList', {
  templateUrl: 'src/app/templates/categories-list.template.html',
  bindings: {
    categories: '<'
  }
});
})();

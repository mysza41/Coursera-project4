(function() {
'use strict';
angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/app/templates/home.template.html'
  })

  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/app/templates/categories-list.template.html',
    controller: 'CategoriesListController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]

    }
  })

  .state('categoriesList.categoryDetail', {
    url: '/category-detail/{categoryShortname}',
    templateUrl: 'src/app/templates/category-detail.template.html',
    controller: 'CategoryDetailController as categoryDetail',
    params: {
      categoryShortname: null
    },
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.categoryShortname);
      }]
    }

  });
}

})();

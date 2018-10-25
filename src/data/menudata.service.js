(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http'];
function MenuDataService($http) {

  var service = this;

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    });
    return response


    .then(function (response){
      var result = response.data;
      var categories = [];
      for (var i = 0; i < result.length; i ++) {
        var elem = {
          name: result[i].name,
          short_name: result[i].short_name
        };
        categories.push(elem);
      }
      return categories;
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        category: categoryShortName
      }
    });
    return response


    .then(function (response){
      var result = response.data.menu_items;
      var items = [];
      for (var i = 0; i < result.length; i ++) {
        var elem = {
          name: result[i].name,
          short_name: result[i].short_name
        };
        items.push(elem);
      }
      return items;
    });
  };
}

})();

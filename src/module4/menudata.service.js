(function(){

  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com"):


  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath){
    var service=this;
    var foundItems=[];
    service.getItemsForCategory = function(categoryShortName) {
       return $http({
       method: 'GET',
       url: (ApiBasePath + "/menu_items.json"),
       data: { category: categoryShortName }
         }).then(function (result) {
           foundItems=[];
           if(categoryShortName.trim()!=""){
              var menu_items=result.data.menu_items;
            }
            return foundItems;
        });
    }

    service.getAllCategories = function() {
       return $http({
       method: 'GET',
       url: (ApiBasePath + "/categories.json"),        
         }).then(function (result) {          
            return result.data;
        });
    }

  }


})();

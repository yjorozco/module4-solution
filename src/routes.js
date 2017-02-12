(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/module4/templates/home.template.html'
  })

  // Premade list page
  .state('categoryList', {
    url: '/categoryList',
    templateUrl: 'src/module4/templates/main-categoryList.template.html',
    controller: 'CategoryController as categoryList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categoryList.itemList', {
    url: '/item-list/{categoryShortName}',
    templateUrl: 'src/module4/templates/itemList.template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['$stateParams', 'MenuDataService',            
            function ($stateParams, MenuDataService) {           
              return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function (response) {
                  return response;
                });;                
            }]
    }
  });

}

})();
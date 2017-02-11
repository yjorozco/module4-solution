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
      categories: ['MenuSearchService', function (MenuSearchService) {
        return MenuSearchService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('categoryList.itemDetail', {
    // url: '/item-detail/{itemId}',
    templateUrl: 'src/module4/templates/item-detail.template.html',
    controller: 'ItemController as itemDetail',
    params: {
      itemId: null
    }
  });

}

})();
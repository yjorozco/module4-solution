(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['categories'];
function CategoryController(categories) {
  var mainList = this;
  mainList.categories = categories;
}

})();

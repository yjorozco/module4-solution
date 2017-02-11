(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

// 'item' is injected through state's resolve
ItemController.$inject = ['item']
function ItemController(item) {
  var itemDetail = this;
  itemDetail.name = item.name;
  itemDetail.quantity = item.quantity;
  itemDetail.description = item.description;
}

})();

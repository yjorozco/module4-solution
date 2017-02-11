(function () {
'use strict';

angular.module('MenuApp')
.component('itemdetail', {
  templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  bindings: {
    item: '<'
  }
});

})();

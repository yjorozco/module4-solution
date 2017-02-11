(function () {
'use strict';

angular.module('MenuApp')
.component('category', {
  templateUrl: 'src/shoppinglist/templates/categoryList.template.html',
  bindings: {
    categories: '<'
  }
});

})();

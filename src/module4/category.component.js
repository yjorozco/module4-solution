(function () {
'use strict';

angular.module('MenuApp')
.component('category', {
  templateUrl: 'src/module4/templates/categoryList.template.html',
  bindings: {
    categories: '<'
  }
});

})();

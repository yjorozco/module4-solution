(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/module4/templates/itemList.template.html',
  bindings: {
    items: '<'
  }
});

})();

(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyShoppingController', ToBuyShoppingController)
    .controller('BoughtShoppingController', BoughtShoppingController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var shoppingList = this;

    shoppingList.items = ShoppingListCheckOffService.buyListItems();

    shoppingList.buyItem = function(index) {
       ShoppingListCheckOffService.buyItem(index);
    };
  }

  BoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function BoughtShoppingController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.boughtListItems();

    boughtList.finishedShopping = function() {
      return ShoppingListCheckOffService.finishedShopping();
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var buyList = [
        { name: "Cookies", quantity: 10 },
        { name: "Chocolate", quantity: 5 },
        { name: "Oreo", quantity: 15 },
        { name: "Milk", quantity: 10 },
        { name: "Marmite", quantity: 5 },
        { name: "Chips", quantity: 10 }
     
      ];

    var boughtList = [];

    service.buyListItems = function () {
      return buyList;
    };

    service.boughtListItems = function () {
      return boughtList;
    };

    service.buyItem = function (index) {
      var item = buyList[index];
      buyList.splice(index,1);
      boughtList.push(item);
    };

    service.finishedShopping = function(){
      return buyList.length == 0;
    };
  }
})();

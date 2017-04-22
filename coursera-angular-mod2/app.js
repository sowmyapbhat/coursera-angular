(function(){
  'use strict';
  angular.module('ShoppingListModule',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListService', ShoppingListCheckOffService);

  function ShoppingListCheckOffService() {
    var service = this;
    service.toBuy = [{name:'Cookies', quantity:5},
                 {name:'Loaves of bread', quantity:2},
                 {name:'Bananas', quantity:10},
                 {name:'Apples', quantity:6},
                 {name:'Potatoes', quantity:3},
               ];
    service.alreadyBought = [];

    this.getToBuy = function() {
      return this.toBuy;
    }

    this.getBought = function() {
      return this.alreadyBought;
    }

    this.removeItem = function(idx) {
      this.alreadyBought.push(this.toBuy.splice(idx,1)[0]);
    }
  }

  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ctrl = this;
    ctrl.items = ShoppingListCheckOffService.getToBuy();

    this.buyItem = function(idx) {
      ShoppingListCheckOffService.removeItem(idx);
    }
  }
  AlreadyBoughtController.$inject = ['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrl = this;
    ctrl.items = ShoppingListCheckOffService.getBought();
  }
})();

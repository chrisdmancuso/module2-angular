(function() {
    'use strict';
    
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        var Buy = this;
      
        Buy.items = ShoppingListCheckOffService.getToBuyItems();

        Buy.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        var Bought = this;
        
        Bought.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService(){
        var service = this;
        var toBuy = [
            { itemName: "Cookies", itemQuantity: "12" },
            { itemName: "Hotdogs", itemQuantity: "16" },
            { itemName: "Bananas", itemQuantity: "10" },
            { itemName: "Cherries", itemQuantity: "10" },
            { itemName: "Aspargus", itemQuantity: "8" }
        ];

        var alreadyBoughtItems = [];
        
        service.buyItem = function(itemIndex){
            var item = toBuy[itemIndex];

            alreadyBoughtItems.push(item);
            toBuy.splice(itemIndex,1);
        };

        service.getToBuyItems = function() {
            return toBuy;
        }
        service.getBoughtItems = function(){
            return alreadyBoughtItems;
        }
    }
    

})();
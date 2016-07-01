var $ = require('jquery');

function purchaseItem(){
    purchasedItem = $(this).parent(".sl-item");
    purchaedItemName = purchasedItem.children(".middle").html();
    $(".in-my-bag__list").append(
      "<li class=\"sl-item\"><span class=\"side back-up\">&#x21e1;</span><span class=\"middle\">"
      +purchaedItemName+"</span><span class=\"side ex\">&#x2717;</span></li>");
    purchasedItem.remove();
  }


module.exports = purchaseItem;
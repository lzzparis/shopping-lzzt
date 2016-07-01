var $ = require('jquery');

function reinstateItem(){
  reinstatedItem = $(this).parent(".sl-item");
  reinstatedItemName = reinstatedItem.children(".middle").html();
  $(".stuff-i-need__list").prepend(
    "<li class=\"sl-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
    +reinstatedItemName+"</span><span class=\"side ex\">&#x2717;</span></li>");
  reinstatedItem.remove();
}

module.exports = reinstateItem;
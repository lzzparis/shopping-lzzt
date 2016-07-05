const $ = require('jquery');


function addItem(event){
    event.preventDefault();
    let itemToAdd = $(this).parent().children(".add-item__input").val();
    if (itemToAdd != ""){
      $(".stuff-i-need__list").prepend(
        `<li class=\"sl-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">${itemToAdd}</span><span class=\"side ex\">&#x2717;</span></li>`);
      $(this).parent().children(".add-item__input").val("");
    }
    else {
      alert("Please type in the box to add items");
    }
  }

module.exports = addItem;
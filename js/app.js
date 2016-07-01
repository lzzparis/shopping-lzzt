var $ = require('jquery');

$(document).ready(function(){

	$(".add-item").on("click",".add-item__btn",addItem);

	$(".stuff-i-need__list").on("click",".sl-item > .check",purchaseItem)
	.on("mouseenter",".sl-item",blackenIcon);


	$(".in-my-bag__list").on("click",".sl-item > .back-up",reinstateItem)
	.on("mouseenter",".sl-item",darkenIcon);


	$(".list").on("click",".sl-item > .ex", deleteItem)
	.on("mouseleave",".sl-item",whitenIcon);

});

function addItem(event){
		event.preventDefault();
		var itemToAdd = $(this).parent().children(".add-item__input").val();
		if (itemToAdd != ""){
			console.log(itemToAdd);
			$(".stuff-i-need__list").prepend(
				"<li class=\"sl-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
				+itemToAdd+"</span><span class=\"side ex\">&#x2717;</span></li>");
			$(this).parent().children(".add-item__input").val("");
		}
		else {
			alert("Please type in the box to add items");
		}
	}

function purchaseItem(){
		purchasedItem = $(this).parent(".sl-item");
		purchaedItemName = purchasedItem.children(".middle").html();
		$(".in-my-bag__list").append(
			"<li class=\"sl-item\"><span class=\"side back-up\">&#x21e1;</span><span class=\"middle\">"
			+purchaedItemName+"</span><span class=\"side ex\">&#x2717;</span></li>");
		purchasedItem.remove();
	}

function reinstateItem(){
	reinstatedItem = $(this).parent(".sl-item");
	reinstatedItemName = reinstatedItem.children(".middle").html();
	$(".stuff-i-need__list").prepend(
		"<li class=\"sl-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
		+reinstatedItemName+"</span><span class=\"side ex\">&#x2717;</span></li>");
	reinstatedItem.remove();
}
function deleteItem() {
		deletedItem = $(this).parent(".sl-item");
		deletedItem.remove();
}

//todo
// function colorIcon(color){
// 		return {$(this).children(".side").css("color",color)};
// }

function blackenIcon(){
		$(this).children(".side").css("color","black");
}

function darkenIcon(){
		$(this).children(".side").css("color","#888");
}


function whitenIcon() {
		$(this).children(".side").css("color","white");
}


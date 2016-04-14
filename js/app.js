$(document).ready(function(){

	$(".add-item").on("click",".add-item__btn",function(event){
		event.preventDefault();
		var itemToAdd = $(this).parent().children(".add-item__input").val();
		$(".stuff-i-need__list").prepend(
			"<li class=\"sl-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
			+itemToAdd+"</span><span class=\"side ex\">&#x2717;</span></li>");
		$(this).parent().children(".add-item__input").val("");
	});

	$(".stuff-i-need__list").on("click",".sl-item > .check",function(){
		purchasedItem = $(this).parent(".sl-item");
		purchaedItemName = purchasedItem.children(".middle").html();
		$(".in-my-bag__list").append(
			"<li class=\"sl-item\"><span class=\"side back-up\">&#x21e1;</span><span class=\"middle\">"
			+purchaedItemName+"</span><span class=\"side ex\">&#x2717;</span></li>");
		purchasedItem.remove();
	}).on("mouseenter",".sl-item",function(){
		$(this).children(".side").css("color","black");


	});


	$(".in-my-bag__list").on("click",".sl-item > .back-up",function(){
		reinstatedItem = $(this).parent(".sl-item");
		reinstatedItemName = reinstatedItem.children(".middle").html();
		$(".stuff-i-need__list").prepend(
			"<li class=\"sl-item\"><span class=\"side check\">&#x2713;</span><span class=\"middle\">"
			+reinstatedItemName+"</span><span class=\"side ex\">&#x2717;</span></li>");
		reinstatedItem.remove();
	}).on("mouseenter",".sl-item",function(){
		$(this).children(".side").css("color","#888");


	});


	$(".list")
	.on("mouseleave",".sl-item",function(){
		$(this).children(".side").css("color","white");

	})
	.on("click",".sl-item > .ex", function(){
		deletedItem = $(this).parent(".sl-item");
		deletedItem.remove();
	});



 
});


//TODO:
//
//update the prepends
//hover behavior for check/x
//proper symbol for check/x
//make sure all listeners are already on the page
//"remove" behavior

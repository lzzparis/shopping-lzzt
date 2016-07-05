const $ = require('jquery');
const addItem = require('./addItem');
const purchaseItem = require('./purchaseItem');
const reinstateItem = require('./reinstateItem');
const deleteItem = require('./deleteItem');
const colorIcon = require('./colorIcon');

$(document).ready(function(){
let blackenIcon = colorIcon("#000");
let darkenIcon = colorIcon("#888");
let whitenIcon = colorIcon("#fff");

	$(".add-item").on("click",".add-item__btn",addItem);

	$(".stuff-i-need__list").on("click",".sl-item > .check",purchaseItem)
	 .on("mouseenter",".sl-item",blackenIcon);


	$(".in-my-bag__list").on("click",".sl-item > .back-up",reinstateItem)
	 .on("mouseenter",".sl-item",darkenIcon);


	$(".list").on("click",".sl-item > .ex", deleteItem)
	 .on("mouseleave",".sl-item",whitenIcon);

});




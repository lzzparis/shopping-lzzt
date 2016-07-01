var $ = require('jquery');
var addItem = require('./addItem');
var purchaseItem = require('./purchaseItem');
var reinstateItem = require('./reinstateItem');
var deleteItem = require('./deleteItem');
var blackenIcon = require('./blackenIcon');
var darkenIcon = require('./darkenIcon');
var whitenIcon = require('./whitenIcon');

$(document).ready(function(){

	$(".add-item").on("click",".add-item__btn",addItem);

	$(".stuff-i-need__list").on("click",".sl-item > .check",purchaseItem)
	.on("mouseenter",".sl-item",blackenIcon);


	$(".in-my-bag__list").on("click",".sl-item > .back-up",reinstateItem)
	.on("mouseenter",".sl-item",darkenIcon);


	$(".list").on("click",".sl-item > .ex", deleteItem)
	.on("mouseleave",".sl-item",whitenIcon);

});




//todo
// function colorIcon(color){
// 		return {$(this).children(".side").css("color",color)};
// }





/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	$(document).ready(function(){
	
		$(".add-item").on("click",".add-item__btn",function(event){
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


/***/ }
/******/ ]);
//# sourceMappingURL=shopping-lzzt.1.0.0.js.map
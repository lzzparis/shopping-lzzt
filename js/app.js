$(document).ready(function(){

	$(".add-item").on("click",".add-item__btn",function(event){
		event.preventDefault();
		var itemToAdd = $(this).parent().children(".add-item__input").val();
		$(".stuff-i-need__list").prepend("<li class=\"sl-item\">"+itemToAdd+"</li>");
		$(this).parent().children(".add-item__input").val("");
	});

	$(".sl-item").mouseenter(function(){
		$(this).css("border-color","#444");
		// $(this).before().css("display","inline");

	})
	.mouseleave(function(){
		$(this).css("border-color","white");
		// $("this:before").css("display","none");		
	});
 
});

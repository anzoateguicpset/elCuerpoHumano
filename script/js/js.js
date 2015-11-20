// funcion que aplica fadeIn al mensaje de cada item del menu
function FadeInMsg(object) {
	jQuery("p").hide();
	// jQuery(object).find("p").fadeIn(1000);
	jQuery("p", object).fadeIn(1000);
}
jQuery(document).ready(function(){

	/* Parts.html */
	jQuery("#parts__list--itemCabeza").mouseenter(function(){
		console.log("entro mouse");
		})
	jQuery("#parts__list--itemCabeza").mouseleave(function(){
		console.log("salio mouse");
	})

	jQuery("#parts__list--itemTronco").mouseenter(function(){
		console.log("in funcion");
		})

	jQuery("#parts__list--itemExtre").mouseenter(function(){
		console.log("in funcion");
		})



	
	
	
});
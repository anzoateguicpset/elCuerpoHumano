// funcion que aplica fadeIn al mensaje de cada item del menu
function FadeInMsg(object) {
	jQuery("p").hide();
	// jQuery(object).find("p").fadeIn(1000);
	jQuery("p", object).fadeIn(1000);
}
jQuery(document).ready(function(){

	/* Parts.html */
	// cabeza
	jQuery("#parts__list--itemCabeza").mouseenter(function(){
		jQuery("#parts__section--itemMain").fadeToggle("slow");
		jQuery("#parts__section--itemCabeza").fadeToggle("slow");
		})
	jQuery("#parts__list--itemCabeza").mouseleave(function(){
		jQuery("#parts__section--itemMain").fadeToggle("slow");
		jQuery("#parts__section--itemCabeza").fadeToggle("slow");
	})

	// Tronco
	jQuery("#parts__list--itemTronco").mouseenter(function(){
		jQuery("#parts__section--itemMain").fadeToggle("slow");
		jQuery("#parts__section--itemTronco").fadeToggle("slow");
		})
	jQuery("#parts__list--itemTronco").mouseleave(function(){
		jQuery("#parts__section--itemMain").fadeToggle("slow");
		jQuery("#parts__section--itemTronco").fadeToggle("slow");
		})

	// Extremidades
	jQuery("#parts__list--itemExtre").mouseenter(function(){
		jQuery("#parts__section--itemMain").fadeToggle("slow");
		jQuery("#parts__section--itemExtre").fadeToggle("slow");
		})
	jQuery("#parts__list--itemExtre").mouseleave(function(){
		jQuery("#parts__section--itemMain").fadeToggle("slow");
		jQuery("#parts__section--itemExtre").fadeToggle("slow");
		})
	/* Fin Parts.html*/
	
});
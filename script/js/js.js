// funcion que aplica fadeIn al mensaje de cada item del menu
function FadeInMsg(object) {
	jQuery("p").hide();
	// jQuery(object).find("p").fadeIn(1000);
	jQuery("p", object).fadeIn(1000);
}
jQuery(document).ready(function(){

	/* Parts.html */
	jQuery("#parts__list--itemCabeza").mouseenter(function(){
		jQuery("#parts__section--itemMain").fadeToggle();
		jQuery("#parts__section--itemCabeza").fadeToggle();
		})
	jQuery("#parts__list--itemCabeza").mouseleave(function(){
		jQuery("#parts__section--itemMain").fadeIn("fast");
		jQuery("#parts__section--itemCabeza").fadeOut("fast");
	})

	jQuery("#parts__list--itemTronco").mouseenter(function(){
		jQuery("#parts__section--itemMain").addClass("hidden");
		jQuery("#parts__section--itemTronco").fadeIn(1000);
		})

	jQuery("#parts__list--itemExtre").mouseenter(function(){
		jQuery("#parts__section--itemMain").addClass("hidden");
		jQuery("#parts__section--itemExtre").fadeIn(1000);
		})
	
});
// funcion que aplica fadeIn al mensaje de cada item del menu
function FadeInMsg(object) {
	jQuery("p").hide();
	// jQuery(object).find("p").fadeIn(1000);
	jQuery("p", object).fadeIn(1000);
}

function openBoxModel(){
	console.log("dentro de la funcion foo");
	// jQuery("#modalmask--js").toggleClass("modalmask").toggleClass("modalmaskActive");
	jQuery("#modalmask--js").addClass("modalmaskActive");
}

function closeBoxModel(){
	jQuery("#modalmask--js").removeClass("modalmaskActive");
}

jQuery(document).ready(function(){

	/* Parts.html */
	// cabeza
	jQuery("#parts__list--itemCabeza").mouseenter(function(){
		jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemCabeza").fadeToggle("fast");
		})
	jQuery("#parts__list--itemCabeza").mouseleave(function(){
		jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemCabeza").fadeToggle("fast");
	})

	// Tronco
	jQuery("#parts__list--itemTronco").mouseenter(function(){
		jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemTronco").fadeToggle("fast");
		})
	jQuery("#parts__list--itemTronco").mouseleave(function(){
		jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemTronco").fadeToggle("fast");
		})

	// Extremidades
	jQuery("#parts__list--itemExtre").mouseenter(function(){
		jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemExtre").fadeToggle("fast");
		})
	jQuery("#parts__list--itemExtre").mouseleave(function(){
		jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemExtre").fadeToggle("fast");
		})
	/* Fin Parts.html*/
	

	/*inside.html*/
	//musculos
	jQuery("#inside__list--itemMusculos").mouseenter(function(){
		jQuery("#inside__section--itemMain").fadeToggle("fast");
		jQuery("#inside__section--itemMusculos").fadeToggle("fast");
		})
	jQuery("#inside__list--itemMusculos").mouseleave(function(){
		jQuery("#inside__section--itemMain").fadeToggle("fast");
		jQuery("#inside__section--itemMusculos").fadeToggle("fast");
	})
	//Esqueleto
	jQuery("#inside__list--itemEsqueleto").mouseenter(function(){
		jQuery("#inside__section--itemMain").fadeToggle("fast");
		jQuery("#inside__section--itemEsqueleto").fadeToggle("fast");
		})
	jQuery("#inside__list--itemEsqueleto").mouseleave(function(){
		jQuery("#inside__section--itemMain").fadeToggle("fast");
		jQuery("#inside__section--itemEsqueleto").fadeToggle("fast");
	})
	//cuidados
	jQuery("#inside__list--itemCuidado").mouseenter(function(){
		jQuery("#inside__section--itemMain").fadeToggle("fast");
		jQuery("#inside__section--itemCuidados").fadeToggle("fast");
		})
	jQuery("#inside__list--itemCuidado").mouseleave(function(){
		jQuery("#inside__section--itemMain").fadeToggle("fast");
		jQuery("#inside__section--itemCuidados").fadeToggle("fast");
	})
	/*fin inside.html*/

	/*health.html*/

	/*fin health.html*/


});
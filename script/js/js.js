// funcion que aplica fadeIn al mensaje de cada item del menu
function FadeInMsg(object) {
	jQuery("p").hide();
	// jQuery(object).find("p").fadeIn(1000);
	jQuery("p", object).fadeIn(1000);
}

/* mejorar esto a una sola funcion*/
function openBoxModel1(){
	jQuery("#modalmask--js1").addClass("modalmaskActive");
}

function closeBoxModel1(){
	jQuery("#modalmask--js1").removeClass("modalmaskActive");
}

function openBoxModel2(){
	jQuery("#modalmask--js2").addClass("modalmaskActive");
}

function closeBoxModel2(){
	jQuery("#modalmask--js2").removeClass("modalmaskActive");
}

function openBoxModel3(){
	jQuery("#modalmask--js3").addClass("modalmaskActive");
}

function closeBoxModel3(){
	jQuery("#modalmask--js3").removeClass("modalmaskActive");
}


jQuery(document).ready(function(){

	/* Parts.html */
	// cabeza
	jQuery("#parts__list--itemCabeza").mouseenter(function(){
		// jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemCabeza").fadeToggle("fast");
		jQuery("#parts__section--itemMain").fadeOut("fast");
		jQuery("#parts__section--itemExtre").fadeOut("fast");
		})
	jQuery("#parts__list--itemCabeza").mouseleave(function(){
		jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemCabeza").fadeToggle("fast");
	})

	// Tronco
	jQuery("#parts__list--itemTronco").mouseenter(function(){
		jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemTronco").fadeToggle("fast");
		jQuery("#parts__section--itemMain").fadeOut("fast");
		jQuery("#parts__section--itemExtre").fadeOut("fast");
		})
	jQuery("#parts__list--itemTronco").mouseleave(function(){
		jQuery("#parts__section--itemMain").fadeToggle("fast");
		jQuery("#parts__section--itemTronco").fadeToggle("fast");
		})

	// Extremidades
	jQuery("#parts__list--itemExtre").mouseenter(function(){
		jQuery("#parts__section--itemMain").fadeOut("fast");
		jQuery("#parts__section--itemExtre").fadeIn("fast");
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
	// Salud
	jQuery("#health__list--itemSalud").mouseenter(function(){
		jQuery("#health__section--itemMain").fadeToggle("fast");
		jQuery("#health__section--itemSalud").fadeToggle("fast");
		jQuery("#health__section--itemMain").hide();
		jQuery("#health__section--itemAlimentacion").hide();
		})
	jQuery("#health__list--itemSalud").mouseleave(function(){
		jQuery("#health__section--itemMain").fadeToggle("fast");
		jQuery("#health__section--itemSalud").fadeToggle("fast");
	})
	// Alimentacion
	jQuery("#health__list--itemAlimentacion").mouseenter(function(){
		jQuery("#health__section--itemMain").fadeOut("fast");
		jQuery("#health__section--itemAlimentacion").fadeIn("fast");
		})
	/*fin health.html*/


});
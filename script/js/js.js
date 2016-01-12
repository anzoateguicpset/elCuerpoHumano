// funcion que aplica fadeIn al mensaje de cada item del menu
function FadeInMsg(object) {
	jQuery("p").hide();
	jQuery(".content-js").hide();
	jQuery(".menu__inside--img").addClass("hidden");
	// jQuery(object).find("p").fadeIn(1000);
	jQuery("p", object).fadeIn(1000);
	jQuery(".content-js", object).fadeIn(1000);
}

function changeBackground(object){
	console.log("entro a la funcion changeBackground");
	var r = jQuery(object).attr("id");
	if (r == "menu__1"){
		jQuery('.index').css('background', 'url(../imagenes/backgroundMenu1.png)');
	}
	if (r == "menu__2"){
		jQuery('.index').css('background', 'url(../imagenes/backgroundMenu2.png)');
	}
	if (r == "menu__3"){
		jQuery('.index').css('background', 'url(../imagenes/backgroundMenu3.png)');
	}
	console.log(r);
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

function openBoxModel4(){
	jQuery("#modalmask--js4").addClass("modalmaskActive");
}

function closeBoxModel4(){
	jQuery("#modalmask--js4").removeClass("modalmaskActive");
}
jQuery(document).ready(function(){

	/* Parts.html */
	// cabeza
	jQuery("#parts__list--itemCabeza").mouseenter(function(){
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
	// Alimentacion
	jQuery("#health__list--itemAlimentacion").mouseenter(function(){
		jQuery("#health__section--itemMain").fadeOut("fast");
		jQuery("#health__section--itemAlimentacion").fadeIn("fast");
		jQuery("#health__section--itemMain").fadeOut("fast");
		jQuery("#health__section--itemSalud").fadeOut("fast");
		})
	/*fin health.html*/


	/*Orientaciones*/
	// ninos
	jQuery("#orientaciones__list--itemNinos").mouseenter(function(){
		jQuery("#orientaciones__section_itemNinos").fadeToggle("fast");
		})
	jQuery("#orientaciones__list--itemNinos").mouseleave(function(){
		jQuery("#orientaciones__section_itemNinos").fadeToggle("fast");
	})
	// pedagogicas
	jQuery("#orientaciones__list--itemPedag").mouseenter(function(){
		jQuery("#orientaciones__section_itemPedag").fadeToggle("fast");
		})
	jQuery("#orientaciones__list--itemPedag").mouseleave(function(){
		jQuery("#orientaciones__section_itemPedag").fadeToggle("fast");
	})
	// Familia
	jQuery("#orientaciones__list--itemFamilia").mouseenter(function(){
		jQuery("#orientaciones__section_itemFamilia").fadeToggle("fast");
		})
	jQuery("#orientaciones__list--itemFamilia").mouseleave(function(){
		jQuery("#orientaciones__section_itemFamilia").fadeToggle("fast");
	})
	/*Fin Orientaciones*/

});




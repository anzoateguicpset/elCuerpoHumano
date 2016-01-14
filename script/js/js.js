/*
	*Funcion que muestra cada div con el contenido y oculta el resto
	*La clase .content-js se usa para ocultar todos los div 
	*La clase .menu__inside--img pertenece a la img principal cuando se abre la pagina
	
	*Para buscar las etiquetas p dentro del objeto p, se puede hacer de la siguiente manera:
	jQuery(object).find("p").fadeIn(1000);
	En la funcion se usa una forma mas corta
*/
function FadeInMsg(object) {
	jQuery(".content-js").hide();
	jQuery(".menu__inside--img").addClass("hidden");
	jQuery("p", object).fadeIn(1000);
	jQuery(".content-js", object).fadeIn(1000);
}

function changeBackground(object){
	console.log("entro a la funcion changeBackground");
	var r = jQuery(object).attr("id");
	console.log(r);
	if (r == "menu__1"){
		jQuery('.index').css('background', 'url(../imagenes/backgroundMenu1.png)');
	}
	if (r == "menu__2"){
		jQuery('.index').css('background', 'url(../imagenes/backgroundMenu2.png)');
	}
	if (r == "menu__3"){
		jQuery('.index').css('background', 'url(../imagenes/backgroundMenu3.png)');
	}
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
	

	/* dentro del cuerpo humano */
	//musculos
	jQuery("#inside__list--itemMusculos-js").mouseenter(function(){
		console.log("entro al id #inside__list--itemMusculos-js");
		jQuery("#inside__section--itemMain-js").fadeToggle("fast");
		jQuery("#inside__section--itemMusculos-js").fadeToggle("fast");
		})
	jQuery("#inside__list--itemMusculos-js").mouseleave(function(){
		console.log("salio al id #inside__list--itemMusculos-js");
		jQuery("#inside__section--itemMain-js").fadeToggle("fast");
		jQuery("#inside__section--itemMusculos-js").fadeToggle("fast");
	})
	//Esqueleto
	jQuery("#inside__list--itemEsqueleto-js").mouseenter(function(){
		console.log("entro al id #inside__list--itemEsqueleto-js");
		jQuery("#inside__section--itemMain-js").fadeToggle("fast");
		jQuery("#inside__section--itemEsqueleto-js").fadeToggle("fast");
		})
	jQuery("#inside__list--itemEsqueleto-js").mouseleave(function(){
		console.log("salio al id #inside__list--itemEsqueleto-js");
		jQuery("#inside__section--itemMain-js").fadeToggle("fast");
		jQuery("#inside__section--itemEsqueleto-js").fadeToggle("fast");
	})
	//cuidados
	jQuery("#inside__list--itemCuidados-js").mouseenter(function(){
		console.log("entro al id #inside__list--itemCuidados-js");
		jQuery("#inside__section--itemMain-js").fadeToggle("fast");
		jQuery("#inside__section--itemCuidados-js").fadeToggle("fast");
		})
	jQuery("#inside__list--itemCuidados-js").mouseleave(function(){
		console.log("salio al id #inside__list--itemCuidados-js");
		jQuery("#inside__section--itemMain-js").fadeToggle("fast");
		jQuery("#inside__section--itemCuidados-js").fadeToggle("fast");
	})
	/*fin inside.html*/

	/* Salud y Alimentacion */
	// Salud
	jQuery("#health__list--itemSalud-js").mouseenter(function(){
		console.log("entro a #health__list--itemSalud-js");
		jQuery("#health__section--itemSalud-js").fadeIn("fast");
		jQuery("#health__section--itemMain-js").hide();
		jQuery("#health__section--itemAlimentacion-js").hide();
		})
	// Alimentacion
	jQuery("#health__list--itemAlimentacion-js").mouseenter(function(){
		console.log("entro a  #health__list--itemAlimentacion-js");
		jQuery("#health__section--itemAlimentacion-js").fadeIn("fast");
		jQuery("#health__section--itemMain-js").fadeOut("fast");
		jQuery("#health__section--itemSalud-js").fadeOut("fast");
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




/*
	*Funcion que muestra cada div con el contenido y oculta el resto de los divs no activos
	*La clase .content-js se usa para ocultar todos los div 
	*La clase .centro--img pertenece a la img principal cuando se abre la pagina
	
	*Para buscar las etiquetas p dentro del objeto p, se puede hacer de la siguiente manera:
	jQuery(object).find("p").fadeIn(1000);
	En la funcion se usa una forma mas corta
*/
function FadeInMsg(object) {
	jQuery(".content-js").hide();
	jQuery(".centro--img").addClass("hidden");
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
	if (r == "menu__4"){
		jQuery('.index').css('background', 'url(../imagenes/backgroundMenu2.png)');
	}
}

jQuery(document).ready(function(){

/*
	* 
	* Funcion de la ventana modal de salud
	*
*/	
	$("#opener1").click(function(){
		console.log("SabiasQue Salud");
		$("#dialog1").dialog({
			dialogClass: "no-close",
            width: 1366,
            height: 800,
            show: "bounce",
            hide: "explode",
            resizable: "false",
            modal: "true"
		});
		$("#dialog1").click(function(){
			$(this).dialog("close");
		});
	});

/*
	*
	* Funcion de la ventana modal de Alimentancion
	*
*/
	$("#opener2").click(function(){
		console.log("SabiasQue Alimentancion 1");
		$("#dialog2").dialog({
			dialogClass: "no-close",
            width: 1366,
            height: 800,
            show: "bounce",
            hide: "explode",
            resizable: "false",
            modal: "true"
		});
		$("#dialog2").click(function(){
			$(this).dialog("close");
		});
	});

	$("#opener3").click(function(){
		console.log("SabiasQue Alimentancion 1");
		$("#dialog3").dialog({
			dialogClass: "no-close",
            width: 1366,
            height: 800,
            show: "bounce",
            hide: "explode",
            resizable: "false",
            modal: "true"
		});
		$("#dialog3").click(function(){
			$(this).dialog("close");
		});
	});

	$("#opener4").click(function(){
		console.log("SabiasQue Alimentancion 3");
		$("#dialog4").dialog({
			dialogClass: "no-close",
            width: 1366,
            height: 800,
            show: "bounce",
            hide: "explode",
            resizable: "false",
            modal: "true"
		});
		$("#dialog4").click(function(){
			$(this).dialog("close");
		});
	});
/*
	*
	* Funcion de la ventana modal partes del cuerpo humano
	*
*/
	$("#opener5").click(function(){
		console.log("SabiasQue extremidades");
		$("#dialog5").dialog({
			dialogClass: "no-close",
            width: 1366,
            height: 800,
            show: "bounce",
            hide: "explode",
            resizable: "false",
            modal: "true"
		});
		$("#dialog5").click(function(){
			$(this).dialog("close");
		});
	});



	/* 
		*
		*partes del cuerpo humano
		*
	 */
	/* Efectos boton actividades */
	jQuery("#parts__actividades-js").mouseover(function(){
		jQuery(".parts__actividades--text").css({"color":"#bc7700"});
		jQuery("#parts__actividades-js").css({"background":"rgba(188, 119, 0, .5)"});
	});
	jQuery("#parts__actividades-js").mouseout(function(){
		jQuery(".parts__actividades--text").css({"color":"#ffffff"});
		jQuery("#parts__actividades-js").css({"background":"#bc7700"});
	});
	// cabeza
	jQuery("#parts__list--itemCabeza-js").mouseenter(function(){
		console.log("entro a #parts__list--itemCabeza-js");
		jQuery("#parts__section--itemMain-js").fadeOut("fast");
		jQuery("#parts__section--itemCabeza-js").fadeIn("fast");
		// para cerrar el contenido de extremidades si esta abierto
		jQuery("#parts__section--itemExtre-js").fadeOut("fast");
		})
	jQuery("#parts__list--itemCabeza-js").mouseleave(function(){
		console.log("salio de #parts__list--itemCabeza-js");
		jQuery("#parts__section--itemMain-js").fadeIn("fast");
		jQuery("#parts__section--itemCabeza-js").fadeOut("fast");
	})

	// Tronco
	jQuery("#parts__list--itemTronco-js").mouseenter(function(){
		console.log("entro a #parts__list--itemTronco-js");
		jQuery("#parts__section--itemMain-js").fadeOut("fast");
		jQuery("#parts__section--itemTronco-js").fadeIn("fast");
		// para cerrar el contenido de extremidades si esta abierto
		jQuery("#parts__section--itemExtre-js").fadeOut("fast");
		})
	jQuery("#parts__list--itemTronco-js").mouseleave(function(){
		console.log("salio de #parts__list--itemTronco-js");
		jQuery("#parts__section--itemMain-js").fadeIn("fast");
		jQuery("#parts__section--itemTronco-js").fadeOut("fast");
		})

	// Extremidades
	jQuery("#parts__list--itemExtre-js").mouseenter(function(){
		console.log("entro de #parts__list--itemExtre-js");
		jQuery("#parts__section--itemMain-js").fadeOut("fast");
		jQuery("#parts__section--itemExtre-js").fadeIn("fast");
		})
	jQuery("#parts__list--itemExtre-js").mouseleave(function(){
		console.log("salio de #parts__list--itemExtre-js");
		})
	/* Fin Parts.html*/
	

	/* 
		*
		*dentro del cuerpo humano
		*
	 */
	/* Efectos boton actividades */
	jQuery("#inside__actividades-js").mouseover(function(){
		jQuery(".inside__actividades--text").css({"color":"#006857"});
		jQuery("#inside__actividades-js").css({"background":"rgba(0, 104, 87, .5)"});
	});
	jQuery("#inside__actividades-js").mouseout(function(){
		jQuery(".inside__actividades--text").css({"color":"#ffffff"});
		jQuery("#inside__actividades-js").css({"background":"#006857"});
	});
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

	/* 
		*
		*Salud y Alimentacion
		*
	*/
	/* Efecto del boton actividades */
	jQuery("#health__actividades-js").mouseover(function(){
		jQuery(".health__actividades--text").css({"color":"#892a2e"});
		jQuery("#health__actividades-js").css({"background":"rgba(137, 42, 46, .5)"});
	});
	jQuery("#health__actividades-js").mouseout(function(){
		jQuery(".health__actividades--text").css({"color":"#ffffff"});
		jQuery("#health__actividades-js").css({"background":"#892a2e"});
	});
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


	/* 
		*
		* Orientaciones
		*
	 */
	// ninos
	jQuery("#orientaciones__list--itemNino-js").mouseenter(function(){
		jQuery("#orientaciones__section--itemNino-js").fadeToggle("fast");
		})
	jQuery("#orientaciones__list--itemNino-js").mouseleave(function(){
		jQuery("#orientaciones__section--itemNino-js").fadeToggle("fast");
	})
	// pedagogicas
	jQuery("#orientaciones__list--itemPedag-js").mouseenter(function(){
		jQuery("#orientaciones__section--itemPedag-js").fadeToggle("fast");
		})
	jQuery("#orientaciones__list--itemPedag-js").mouseleave(function(){
		jQuery("#orientaciones__section--itemPedag-js").fadeToggle("fast");
	})
	// Familia
	jQuery("#orientaciones__list--itemFamilia-js").mouseenter(function(){
		jQuery("#orientaciones__section--itemFamilia-js").fadeToggle("fast");
		})
	jQuery("#orientaciones__list--itemFamilia-js").mouseleave(function(){
		jQuery("#orientaciones__section--itemFamilia-js").fadeToggle("fast");
	})
	/*Fin Orientaciones*/

});




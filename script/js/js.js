// funcion que aplica fadeIn al mensaje de cada item del menu
function FadeInMsg(object) {
	// var foo = jQuery(objeto).find("p").text();
	var foo = jQuery("p", object).text();
	console.log(foo);
	jQuery(object).find("p").fadeIn(1000);
	jQuery(object).find("p").fadeOut(1000);
}
jQuery(document).ready(function(){
});
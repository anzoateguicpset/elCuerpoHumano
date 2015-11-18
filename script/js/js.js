function testing(objeto) {

	var foo = jQuery(objeto).find("p a").text();
	// var foo = $("p a", this).text();
	console.log(foo);
}
jQuery(document).ready(function(){
});
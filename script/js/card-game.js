/* cardGame.js */

var correctCard = 0;
$(init);

/**
 * Inicia la ejecucion del juego
 */
function init(){
	$('#parts__success-js').hide();


	////////////////////
	// reset del juego //
	////////////////////
	correctCards = 0;
	$('#cardPile').html('');
	$('#cardSlots').html('');


	/////////////////////////
	// objeto de imagenes //
	/////////////////////////

	var imagenes = {
		1:"<img src='../imagenes/card-game/brazo.png'>",
		2:"<img src='../imagenes/card-game/cabeza.png'>",
		3:"<img src='../imagenes/card-game/pie.png'>",
		4:"<img src='../imagenes/card-game/pierna.png'>",
		5:"<img src='../imagenes/card-game/tronco.png'>"
	};


	// // desordenando el arreglo de las imagenes
	// imagenes.sort(function(){
	// 	return Math.random() - .5
	// });

	console.log(imagenes);


	// Haciendo draggable cada imagen
	for (var i = 5; i > 0; i--) {
		$('<div>' +imagenes[i]+'</div>').data('number', i).attr('id','card'+i).appendTo('#cardPile').draggable({
			containment: '#content',
			stack: '#cardPile div',
			cursor: 'move',
			revert: true
		});
	}

	/////////////////////////////
	// Slots para las imagenes //
	/////////////////////////////
	var words = ['Brazo', 'Cabeza', 'Pie', 'Pierna', 'Tronco'];
		for (var i = 0; i < 5  ; i++) {
		$('<div>'+words[i]+'</div>').data('number', i+1).appendTo('#cardSlots').droppable({
			accept: '#cardPile div',
			hoverClass: 'hovered',
			drop: handleCardDrop
		});
	}

}

/**
 * [Si la imagen fue arrastrada al slot correcto,
 * cambia el color de la imagen, y se posiciona directamente
 * arriba del slot previniendo que sea arrastrada otra vez]
 * @param  {[Objeto]} event [Evento de la pagina]
 * @param  {[Objeto]} ui    [description]
 */
function handleCardDrop(event, ui){

	var slotNumber = $(this).data('number');
	var cardNumber = ui.draggable.data('number');

	console.log("numero de slot "+slotNumber);
	console.log("numero de carta "+cardNumber);

	if(slotNumber == cardNumber){
		ui.draggable.addClass('correct');
		ui.draggable.draggable('disable');
		$(this).droppable('disable');
		ui.draggable.position({
			of: $(this),
			my: 'left top',
			at: 'left top'
		});
		ui.draggable.draggable('option', 'revert', false);
		correctCards++;
	}

	/**
	 * Si todas las imagenes han sido colocadas en el slot correcto
	 * se muestra el mensaje y se resetean las cartas para otro juego
	 */
	if(correctCards == 5){
		$('#parts__success-js').show();
		$('#parts__success-js').animate({
			top: '200px',
			opacity: 1
		}, 500);
	}
}
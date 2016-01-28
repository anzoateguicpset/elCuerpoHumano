/* cardGame.js */

var correctCard = 0;
$(init);

/**
 * Inicia la ejecucion del juego
 */
function init(){
	$('#successMessage').hide();


	////////////////////
	// reset del juego //
	////////////////////
	correctCards = 0;
	$('#cardPile').html('');
	$('#cardSlots').html('');


	/////////////////////////
	// Arreglo de imagenes //
	/////////////////////////
	var imagenes = [
		"<img src='../imagenes/cardGame/001.png'>",
		"<img src='../imagenes/cardGame/002.png'>",
		"<img src='../imagenes/cardGame/003.png'>",
		"<img src='../imagenes/cardGame/004.png'>",
		"<img src='../imagenes/cardGame/005.png'>"
	];
	// desordenando las imagenes
	imagenes.sort(function(){
		return Math.random() - .5
	});

	// Haciendo draggable cada imagen
	for (var i = 0; i < 5; i++) {
		var numerImg = imagenes[i].charAt(33);
		$('<div>' +imagenes[i]+'</div>').data('number', numerImg).attr('id','card'+i).appendTo('#cardPile').draggable({
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
		$('#successMessage').show();
		$('#successMessage').animate({
			top: '200px',
			opacity: 1
		}, 500);
	}
}
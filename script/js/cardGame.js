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


	/////////////////////////////////
	// creando la pila de imagenes //
	/////////////////////////////////
	var imagenes = ["<img src='../imagenes/001.png'>",
					"<img src='../imagenes/002.png'>",
					"<img src='../imagenes/003.png'>",
					"<img src='../imagenes/004.png'>",
					"<img src='../imagenes/005.png'>"];
	imagenes.sort(function(){
		return Math.random() - .5
	});

	for (var i = 0; i < 5; i++) {
		var numerImg = imagenes[i].charAt(24);
		$('<div>' +imagenes[i]+'</div>').data('number', numerImg).attr('id','card'+i).appendTo('#cardPile').draggable({
			containment: '#content',
			stack: '#cardPile div',
			cursor: 'move',
			revert: true
		});
	}

	/////////////////////////////////////////
	// creando los slots para las imagenes //
	/////////////////////////////////////////
	var words = ['dic', 'birrete', 'libros', 'bolso', 'regla'];
		for (var i = 0; i < 5  ; i++) {
		$('<div>'+words[i]+'</div>').data('number', i+1).appendTo('#cardSlots').droppable({
			accept: '#cardPile div',
			hoverClass: 'hovered',
			drop: handleCardDrop
		});
	}

}

function handleCardDrop(event, ui){

	var slotNumber = $(this).data('number');
	var cardNumber = ui.draggable.data('number');

	console.log("numero de slot "+slotNumber);
	console.log("numero de carta "+cardNumber);
	/**
	 * Si la imagen fue arrastrada al slot correcto
	 * cambia el color de la imagen, y se posiciona directamente
	 * arriba del slot previniendo que sea arrastrada otra vez
	 */
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
			left: '380px',
			top: '200px',
			width: '400px',
			height: '100px',
			opacity: 1
		});
	}
}
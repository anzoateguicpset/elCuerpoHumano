/* cardGame.js */

var correctCard = 0;
$(init);

function init(){
	$('#successMessage').hide();


	// reset the game
	correctCards = 0;
	$('#cardPile').html('');
	$('#cardSlots').html('');


	// create the pile of shuffled cards
	var numbers = [1, 2, 3, 4, 5];
	numbers.sort(function(){
		return Math.random() - .5
	});


	for (var i = 0; i < 5; i++) {
		$('<div>' +numbers[i]+'</div>').data('number', numbers[i]).attr('id','card'+numbers[i]).appendTo('#cardPile').draggable({
			containment: '#content',
			stack: '#cardPile div',
			cursor: 'move',
			revert: true
		});
	}


	// create the card slots
	var words = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
	for (var i = 1; i <= 5  ; i++) {
		$('<div>'+words[i-1]+'</div>').data('number', i).appendTo('#cardSlots').droppable({
			accept: '#cardPile div',
			hoverClass: 'hovered',
			drop: handleCardDrop
		});
	}

}

function handleCardDrop(event, ui){

	var slotNumber = $(this).data('number');
	var cardNumber = ui.draggable.data('number');


	/*

	If the card was dropped to the correct slot,
	change the card colour, position it directly
	on top of the slot, and prevent it being dragged again

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

	
	/*

	If all the cards have been placed correctly then display a message
	 and reset the cards for another go

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
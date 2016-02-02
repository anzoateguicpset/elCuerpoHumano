/**
 * Al terminar el juego, se va a la pagina principal de la actividad para comenzar otra vez
 */
function resetAhorcado(){
    location.href="inside-activities.html";

}

$(document).ready(function() {
    var respuesta = new Array();
    var errores = 1;
    $("#inside__success-js").hide();

    ////////////////////////////////////////////////
    // botones creados dinamicamente usando ASCII //
    ////////////////////////////////////////////////
    for (var i = 65; i < 91; i++) {
        $('#letras-container-js').append('<button class="btn  btn-default" id="letra'+String.fromCharCode(i)+'">'+String.fromCharCode(i)+'</button>');
    };

    ///////////////////////
    // Objeto de frases //
    ///////////////////////
    frases = {
        0:"los musculos permiten correr reir agarrar y saltar",
        1:"las proteinas de origen animal son la mejores para los musculos",
        2:"los huesos se componen de calcio fosforo y colageno",
        3:"la estructura del cuerpo esta conformada por los huesos",
        4:"hacer ejercicio favorece el aumento de la masa muscular y de la fortaleza osea",
        5:"el cuerpo humano de un adulto tiene doscientos seis huesos",
    };


    ///////////////////////
    // Todo a mayusculas //
    ///////////////////////
    for (var i = 0; i <= 5; i++) {
      frases[i] = frases[i].toUpperCase();
    };

    //////////////////////////////////////////
    // numero al azar para elegir una frase //
    //////////////////////////////////////////
    var azar = Math.floor((Math.random() * 6));
    console.log(azar);
    console.log(frases[azar]);
    for (var i = 0; i < frases[azar].length; i++) {
        if(frases[azar].charAt(i) != ' ') respuesta[i] = '_ ';
        else respuesta[i] = '\n'
        $('#secreto-js').append(respuesta[i]);
  };

/////////////////////////////////////////////////
// Cuando se hace click a una letra entra aqui //
/////////////////////////////////////////////////
$('.btn-default').click(function(event) {
    // Sacamos la tecla que se pulso
    var id= this.id.charAt(5);
    var ban = false;
    $('#secreto-js').empty();
    // Comparamos si la letra que se eligio esta en la frase y se va agregado
    for (var i = 0; i < frases[azar].length; i++) {
        if(frases[azar].charAt(i) == id){
            respuesta[i] = id;
            ban = true;
        }
        $('#secreto-js').append(respuesta[i]);
    };

    // Si la letra no esta en la frase se aumentan los errores y se cambia la imagen
    // Al alcanzar los cinco errores el juego termina
    if(!ban){
        errores++;
        $('#imagen').attr('src', 'img/a'+errores+'.jpg');
        $('#imagen').attr('src', '../imagenes/ahorcado-game/a'+errores+'.jpg');
        if(errores == 5){
            alert('Vuelve a intentarlo. La frase era: '+frases[azar]);
            location.href="inside-activities.html";
        }
    }
    
    // Si la letra esta en la frase se verifica si se completo la frase
    else{
        var ban2 = true;
        for (var i = 0; i < respuesta.length; i++) {
            if(respuesta[i] == '_ '){
                ban2 = false;
                break;
            }
        };
        if(ban2){
            $("#inside__success-js").fadeIn("fast");

        }
    }
    // Se desactiva la letra que ya se pulso
    $(this).removeClass('btn-default');
    $(this).attr('disabled','disabled');
});
});


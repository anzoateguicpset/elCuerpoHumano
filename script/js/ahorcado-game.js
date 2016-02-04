// Variables de inicio del juego
var errores = 1;
var respuesta = new Array();
var numeroAzar = Math.floor((Math.random() * 6));
$(init);

/**
 * funcion que inicia la ejecucion del juego
 */
function init(){
    llenaLetras();
    escribeEspacios();
    $('.btn-default').click(foo);
};

/**
 * Genera dinamicamente las letras de cada boton usando ASCII
 */
function llenaLetras(){
    $('#letras-container-js').html("");
    for (var i = 65; i < 91; i++) {
        $('#letras-container-js').append('<button class="btn  btn-default" id="letra'+String.fromCharCode(i)+'">'+String.fromCharCode(i)+'</button>');
    };
};

/**
 * Selecciona la frase del objeto mediante un numero al azar
 */
function escribeEspacios(){
    // Objeto de frases
    frases = {
        0:"los musculos permiten correr reir agarrar y saltar",
        1:"las proteinas de origen animal son la mejores para los musculos",
        2:"los huesos se componen de calcio fosforo y colageno",
        3:"la estructura del cuerpo esta conformada por los huesos",
        4:"hacer ejercicio favorece el aumento de la masa muscular y fortalece los huesos",
        5:"el cuerpo humano de un adulto tiene doscientos seis huesos",
    };

    
    console.log("La frase es: " + frases[numeroAzar]);

    $("#secreto-js").empty();
    for (var i = 0; i < frases[numeroAzar].length; i++) {
        if(frases[numeroAzar].charAt(i) != ' ') respuesta[i] = '_ ';
        else respuesta[i] = '\n'
        $('#secreto-js').append(respuesta[i]);
    };

    // Frases a mayusculas 
    for (var i = 0; i <= 5; i++) {
      frases[i] = frases[i].toUpperCase();
    };
};


/**
 * Cada vez que se presiona una letra entra a esta funcion
 * @param  {object} event - objeto event
*/
function foo(event){

    // Sacamos la tecla que se pulso, desde el id de cada boton de la letra
    var id= this.id.charAt(5);
    var ban = false;

    // se eliminan todos los hijos del div donde esta la frase secreta
    $('#secreto-js').empty();

    // se recorre todo el arreglo y se compara si la letra pulsada esta en el mismo
    for (var i = 0; i < frases[numeroAzar].length; i++) {
        if(frases[numeroAzar].charAt(i) == id){
            respuesta[i] = id;
            ban = true;
        }
        $('#secreto-js').append(respuesta[i]);
    };

    // Si la letra no esta en la frase se aumentan los errores y se cambia la imagen
    // Al alcanzar los cinco errores el juego termina
    if(!ban){
        errores++;
        $('#imagen').attr('src', '../imagenes/ahorcado-game/a'+errores+'.jpg');
        if(errores == 5){
            alert('Vuelve a intentarlo. La frase era: '+frases[numeroAzar]);
            resetAhorcado();
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
}

/**
 * Al ganar o perder entrar a esta funcion para iniciar los valores y comenzar la ejecucion del juego
 */
function resetAhorcado(){
    // Para generar un nuevo numero al azar para escoger una nueva frase
    numeroAzar = Math.floor((Math.random() * 6));
    errores = 1;
    $('#imagen').attr('src', '../imagenes/ahorcado-game/a'+errores+'.jpg');
    init();
};



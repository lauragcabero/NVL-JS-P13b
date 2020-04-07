function frasePalindromo(frase) {

    // Paso a minusculas, quito espacios de la frase que me entre y quito simbolos raros y acentos:

    var pasoAMinusculasQuitoEspacios = frase.toLowerCase().replace(/\s/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // test

    console.log(pasoAMinusculasQuitoEspacios);

    // Creo otra frase convirtiéndola en array, le doy la vuelta al array y la paso a string:

    var doyLaVuelta = pasoAMinusculasQuitoEspacios.split('').reverse().toString();

    // test

    console.log(doyLaVuelta);

    // Le quito las ',' con un replace dentro del for
    // Lo igualo a -1 ya que tiene una coma menos que el número total de letras
    // Giro la palabra para poder compararla con la que me ha entrado limpia

    for (var i = 0; i < ((doyLaVuelta.length) -1); i++) {
        doyLaVuelta = doyLaVuelta.replace(',','');
    };

    // test

    console.log(doyLaVuelta);

    // Comparo lo que me entra filtrado con la frase sin comas salida del bucle:

    if(pasoAMinusculasQuitoEspacios === doyLaVuelta) {
        document.write(frase + " es un palíndromo");
    } else {
        document.write(frase + " no es un palíndromo");
    }
};

// Llamo a la función comparación con el parámetro que quiera comprobar:

frasePalindromo('anas');


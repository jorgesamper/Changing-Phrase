const typed = new Typed('.typed',{
    strings: [
      'Diseño en experiencia de usuario',
      'Desarrollo interfaces intuitivas',
      'Experiencias visuales',
      'Productos digitales...'
    ],
    stringsElement: '#cadenas-texto',
    typeSpeed: 50, //velocidad en milisegundos para poner una letra
    starDelay: 300, //tiempo de retraso para iniciar la animación
    backSpeed: 40, //velocidad en milisegundos para borrar una letra
    shuffle: false, //alterar orden en que se escriben las palabras
    backDelay: 1500, //tiempo de espera despues de que termina de escribir una palabra
    loop: true, //repetir el array de strings
    loopCount: false, //cantidad de veces a repetir el array. false = infinite
    showCursor: true, //mostrar cursor palpitando
    cursorChar: '|', //caracter para el cursor
});

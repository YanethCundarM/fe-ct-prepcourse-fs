
console.log(3+5);
console.log ( 4 - 3);
console.log (4 * 6 );
console.log ( 30 / 9);
console.log ( 95 % 4);
console.log (3 + 5 * 2 - 8);
//comprobando la reglas de prescedencia
console.log ( (3 + 5) * 2 - 8);

// adicion y string
//concatenar no es mas que un sinonimo de unir

console.log ('Hola' + 'Camilo');
var nombre = 'camilo';
var salud = 'hola' + nombre;
console.log(salud);

//Como otro ejemplo, el operador de exponenciación tiene la particularidad de tener asociatividad a la derecha,
function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador división (/)
console.log(echo("izquierdo", 6) / echo("derecho", 2));



//La diferencia en asociatividad entra en juego cuando hay múltiples operadores con la misma precedencia.

function echo(nombre, num) {
    console.log("Evaluando el lado " + nombre);
    return num;
}
// Nótese el operador potencia (**)
console.log(echo("izquierdo", 2) ** echo("derecho", 3));

console.log (4 < 7);
console.log (4 < 1);
console.log (4 < 4);
console.log (4 == 7);

3 == 3;
3 === 3;
3 == '3';
3 === '3';

//asociatividad
//asignacion de derecha a izquierda


var a = 1;
var b = 2;
var c = (a = b);
console.log(a);
console.log(b);
console.log(c);

console.log (16 / 2 / 4);









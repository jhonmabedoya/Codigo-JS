console.log("Hola MUNDO");

//CUADRADO
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado son " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro es  " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El perimetro es  " + areaCuadrado + "cm2");
console.groupEnd();


//TRIANGULO
console.group("triangulo");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 4;
const baseTriangulo = 6;
console.log("Los lados del triangulo son " + ladoTriangulo1 + "cm" + ladoTriangulo2 + "cm" + baseTriangulo + "cm");

console.groupEnd();

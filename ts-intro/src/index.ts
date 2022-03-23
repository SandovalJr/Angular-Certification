function sumar(a: number, b: number): number {
  return a + b;
}

const restarflecha = (a: number, b: number): number => {
  return a - b;
};

//campos obligatorios
//opcionales se coloca un ?
//valores por defecto
function multiplicar(
  numbero: number,
  otronumero?: number,
  base: number = 11
): number {
  return numbero * base;
}

const rm = multiplicar(2, 0, 2);
console.log(rm);

interface personajeLOR {
  nombre: string;
  pv: number;
}

//void : no retorna nada la funcion
function curar(personaje: personajeLOR, curarX: number): void {
  personaje.pv += curarX;
  console.log(personaje);
}

const nuevopersonaje: personajeLOR = {
  nombre: "Spiderman",
  pv: 80,
};

curar(nuevopersonaje, 10);


const rr = restarflecha(50, 10);
console.log(rr);

const resultado = sumar(2, 3);
console.log(resultado);

class Heroe {
  //   alterEgo: string;
  //   edad: number;
  //   nombreReal: number;

  // es una funcion que se llama cuando hago referencia a la clase
  constructor(
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    //    console.log('hola');
    this.alterEgo = alterEgo;
    this.edad = edad;
    this.nombreReal = nombreReal;
  }
}

const spiderman = new Heroe("spiderman", 35, "Tom Holland");

console.log(spiderman);

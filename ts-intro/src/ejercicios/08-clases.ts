//CLASES

class personaNormal {
    constructor(public nombre: string, public direccion: string) {
      this.nombre = nombre;
      this.direccion = direccion;
    }
  }
  
  class Heroe extends personaNormal {
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
      super(nombreReal,'New York USA');
    }
  }
  
  const spiderman = new Heroe("spiderman", 35, "Tom Holland");
  
  console.log(spiderman);
  
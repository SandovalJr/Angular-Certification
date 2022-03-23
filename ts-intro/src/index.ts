interface SuperHeroInterface {
  nombre: string;
  edad: number;
  direccion: direction;
  //funcion que nos retorna un string
  mostrarDireccion: () => string;
}

interface direction {
  calle: string;
  pais: string;
  ciudad: string;
}

const superHeroe: SuperHeroInterface = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return `${this.nombre}, ${this.direccion.ciudad} ${this.direccion.pais}`;
  },
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

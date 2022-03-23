// DESTRUCTURACION DE OBJETOS

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: detalles;
  }
  
  interface detalles {
    autor: string;
    anio: number;
  }
  
  const reproductor: Reproductor = {
    volumen: 85,
    segundo: 36,
    cancion: "pantysito ",
    detalles: {
      autor: "Feid",
      anio: 2022,
    },
  };
  
  const {
    volumen,
    segundo,
    cancion,
    detalles: {
      // se coloca dos puntos para poder ponerle otro nombre a la variable
      autor: AutorDetalle,
      anio,
    },
  } = reproductor;
  // const {autor} = detalles
  
  console.log(`El volumen actual es:${volumen}`);
  console.log(`El segundo actual es: ${segundo}`);
  console.log(`Cancion actual es: ${cancion}`);
  console.log(`El autor actual es: ${AutorDetalle}`);
  
  console.log("--------------------------------------------");
  
  // DESTRUCTURACION DE ARREGLOS
  
  const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
  //en caso de no querer ciertos datos solo ponemos las comas
  const [,,p3] = dbz;
  
  // console.log(p1);
  // console.log(p2);
  console.log(p3);
  
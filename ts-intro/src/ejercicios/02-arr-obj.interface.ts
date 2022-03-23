
//ARRAY Y OBJETOS

interface personajesi {
    nombre: string;
    hp: number;
    habilidades: string[];
    pueblonatal: string;
  }
  
  const personaje: any = {
    nombre: "elias",
    hp: 100,
    habilidades: ["fuego", "agua"],
    pueblonatal: "aguascalientees",
  };
  
  //imprimir una tabla
  console.table(personaje);
  
  /*
      ===== Código de TypeScript =====
  */
  
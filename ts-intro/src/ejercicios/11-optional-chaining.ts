interface pasajero {
    nombre: string;
    hijos?: string[];
  }
  
  const pasajero1: pasajero = {
    nombre: "cris",
  };
  
  const pasajero2: pasajero = {
    nombre: "melissa",
    hijos: ["natalia", "gabriel"],
  };
  
  function imprimeHijos(pasajero: pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
  }
  
  imprimeHijos(pasajero1);
  
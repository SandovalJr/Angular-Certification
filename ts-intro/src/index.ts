console.log("Hola Mundo, que hacen!");

let nombre: string = "elias";
const apellido = "sandoval";

let hp: number | string = 77;
hp = "siete siete";

let vivo: boolean = true;

//objetos y arrays
let habilidades: string[] = ["elias", "matias", "daniel", "emmanuel"];

habilidades.push("juan");
console.log(habilidades);

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

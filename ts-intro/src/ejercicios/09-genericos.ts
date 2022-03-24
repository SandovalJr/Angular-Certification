// GENERICOS

// se le pone T para ser del tipo (el que vayas a enviarle ya sea string o numerico o boolean o el que sea )
function quetiposoy<T>(argumento: T) {
    return argumento;
  }
  
  let soystring = quetiposoy("holamundo");
  let soynumber = quetiposoy(2454);
  let soyarray = quetiposoy([1, 2, 3, 4]);
  // console.log(soystring);
  let soyExplicito = quetiposoy<number>(3)
  
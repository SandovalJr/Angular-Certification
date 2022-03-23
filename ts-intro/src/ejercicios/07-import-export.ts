import {
    Producto,
    calcularISV,
  } from "./06-desestructuracion-funcion";
  
  const carritoCompras: Producto[] = [
    {
      desc: "IPAD AIR",
      price: 100,
    },
    {
      desc: "iphone 13",
      price: 150,
    },
  ];
  
  const [total, isv] = calcularISV(carritoCompras);
  console.log("index");
  
  console.log(total);
  console.log(isv);
  
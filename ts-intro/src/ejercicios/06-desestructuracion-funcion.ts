// DESTRUCTURACION DE ARGUMENTOS
interface Producto {
    desc: string;
    price: number;
  }
  
  const ipadAir: Producto = {
    desc: "IPAD AIR",
    price: 18.5,
  };
  
  const iphone: Producto = {
    desc: "IPHONE",
    price: 29000,
  };
  
  function calcularISV(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({ price }) => {
      total += price;
    });
    return [total, total * 0.10];
  }
  
  const articulos = [ipadAir, iphone];
  const [total, isv] = calcularISV(articulos);
  
  console.log(total);
  console.log(isv);
  
import img1 from "../img/img-suculenta-4.jpeg"
import img2 from "../img/img-suculenta-10.jpeg"
import img3 from "../img/img-suculenta-13.jpeg"
import img4 from "../img/img-suculenta-6.jpeg"
import img5 from "../img/img-centromesa-2.jpeg"
import img6 from "../img/img-centromesa-4.jpeg"
const productos = [
    {
        id:"4",
        nombre:"Cotyledon tomentosa",
        precio:1200,
        categoria:"plantas",
        img:img1,
        stock:14,
        descripcion:"Es una especie originaria de Sudáfrica,En la provincia de capa. Es destacada por su lento crecimiento y delicados cuidados." 
    },
    {
        id:"13",
        nombre:"Crassula rupestris",
        precio:1600,
        categoria:"plantas",
        img:img3,
        stock:23,
        descripcion:"Es nativa de algunas reguiones de Sudáfrica. Una de sus mayores curiosidades es la forma en la que crecen su hojas de manera muy original." 
    },
    {
        id:"10",
        nombre:"Aeonium tabulaeforme",
        precio:1150,
        categoria:"plantas",
        img:img2,
        stock:18,
        descripcion:"Es la mas destacada en todas las siemprevivas canarias, caracterizada por su roseta aplastada como un plato de 100 a 200 hojas."
    },
    {
        id:"6",
        nombre:"Mammillaria vetula",
        precio:1300,
        categoria:"plantas",
        img:img4,
        stock:20,
        descripcion:"Es originaria de Hidalgo y Queretaro en mexico. Se a extendido por el mundo como planta ornamental."
    },
    {
        id:"8",
        nombre:"Centro de mesa madera",
        precio:2500,
        categoria:"centro de mesas",
        img:img6,
        stock:12,
        descripcion:"Centro de mesa realizado en madera pino, el cual cuenta con una gran variedad de suculentas y su vela aromatica." 
    },
    {
        id:"15",
        nombre:"Centro de mesa mediano",
        precio:3000,
        categoria:"centro de mesas",
        img:img5,
        stock:11,
        descripcion:"Centro de mesa mediano, con más de 6 tipos de suculentas en un diseño colorido para general un ambiente más alegre y acogedor." 
    },
   
]

export const getProductos = ()=>{
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(productos)
        }, 1000)
    })
}

export const getProductosById = (ProductosId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === ProductosId))
        }, 1000)
    })
}


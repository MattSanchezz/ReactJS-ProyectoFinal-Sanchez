const productos = [
    { nombre: "Camiseta", precio: 10000, id: "1", stock:10, img: "./img/camiseta.png", idCat: "2"},
    { nombre: "Short", precio: 5000, id: "2", stock:10, img: "./img/short.png", idCat: "3"},
    { nombre: "Buzo", precio: 15000, id: "3", stock:10, img: "./img/buzo.png", idCat: "2"},
    { nombre: "Calzado", precio: 3000, id: "4", stock:10, img: "./img/calzado.png", idCat: "3"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}

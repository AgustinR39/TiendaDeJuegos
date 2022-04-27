const Products = [
    {id: '1', name: 'Hollow Knight', price: 1000, category: 'Aventura', img: '../imagenes/HollowKnight.jpg', stock: 25, description: 'Descripcion de Hollow Knight'},
    {id: '2', name: 'SilkSong', price: 3000, category: 'Aventura', img: '../imagenes/Silksong.jpg', stock: 10, description: 'Descripcion de Hollow Knight SilkSong'},
    {id: '3', name: 'Fall Guys', price: 2000, category: 'Multijugador', img: '../imagenes/FallGuys.jpg', stock: 35, description: 'Descripcion de Fall Guys'},
    {id: '4', name: 'Dead Cells', price: 2500, category: 'Accion', img: '../imagenes/DeadCells.jpg', stock: 40, description: 'Descripcion de Dead Cells'},
    {id: '5', name: 'Cup Head', price: 1500, category: 'Accion', img: '../imagenes/CupHead.webp', stock: 30, description: 'Descripcion de Cup Head'},
    {id: '6', name: 'Move Or Die', price: 500, category: 'Multijugador', img: '../imagenes/MoveOrDie.jpg', stock: 30, description: 'Descripcion de Move Or Die'}
]

const categories = [
    {id: 'Aventura', description: 'Aventura'},
    {id: 'Accion', description: 'Acción'},
    {id: 'Multijugador', description: 'Multijugador'}
]

export const getCategories = () => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve(categoryId ? Products.filter(prod => prod.category === categoryId) : Products)
        },500)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve(Products.find(prod => prod.id === id))
        },500)
    })
}
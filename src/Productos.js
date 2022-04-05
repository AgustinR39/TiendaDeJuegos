const Products = [
    {id: 1, name: 'Hollow Knight', price: 1000, category: 'videojuego', img: 'imagenes/HollowKnight.jpg', stock: 25, description: 'Descripcion del Hollow Knight'},
    {id: 2, name: 'Silksong', price: 3000, category: 'videojuego', img: 'imagenes/Silksong.jpg', stock: 10, description: 'Descripcion del Hollow Knight Silksong'},
    {id: 3, name: 'Cup Head', price: 1500, category: 'videojuego', img: 'imagenes/CupHead.webp', stock: 30, description: 'Descripcion del Cup Head'}
]

export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve(Products)
        },2000)
    })
}
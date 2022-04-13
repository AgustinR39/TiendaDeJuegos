const Products = [
    {id: '1', name: 'Hollow Knight', price: 1000, category: 'aventura', img: 'imagenes/HollowKnight.jpg', stock: 25, description: 'Descripcion del Hollow Knight'},
    {id: '2', name: 'Silksong', price: 3000, category: 'aventura', img: 'imagenes/Silksong.jpg', stock: 10, description: 'Descripcion del Hollow Knight Silksong'},
    {id: '3', name: 'Cup Head', price: 1500, category: 'accion', img: 'imagenes/CupHead.webp', stock: 30, description: 'Descripcion del Cup Head'}
]

const categories = [
    {id: 'aventura', description: 'Aventura'},
    {id: 'accion', description: 'Acción'},
    {id: 'mitologia', description: 'Mitología'}
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
# Kyouka

> Este es un proyecto realizado para el curso de React JS. Se trata de un ecommerce en el que podrás navegar por distintas categorías y adquirir tu orden de compra de los productos que has seleccionado.

## Installation git clone

Para acceder al proyecto clonándolo, deberás ejecutar en consola:
```sh
git clone  https://github.com/AgustinR39/TiendaDeJuegos
npm install 
npm start
```

### Installation download ZIP
```sh
Ir a “code” > download ZIP
Descomprimir el archivo
En la carpeta donde se encuentra “package.json” ejecutar en terminal: 
npm install
npm start
```
### Techs

🛠️ React JS

🛠️ JavaScript

🛠️ HTML

🛠️ CSS

### Dependencies

Para que el proyecto se logre realizar de una manera esperada utilicé las siguientes herramientas:

⚡ React-router-dom: routing de la web

⚡ Styled-component: estilos generales

⚡ React-Firebase: base de datos

⚡ React-toastify: notificación de producto

### Firebase / Firestore

- Colección: categories. Cada categoría será según lo siguiente:

|   Campo      | Tipo   |            Valor       |
| -------------| ------------- | ------------- |
| Descripcion  | String | Categoría del producto|

- Colección: Products. Cada product tiene las siguientes características:

|    Campo      |   Tipo        |   Valor       |
| ------------- | ------------- | ------------- |
|   category    |   String      |   Categoría   |
| description   |   String      |   Description |
|       img     |   String      |       img     |
|       name    |   String      |      Nombre   |
|      place    |   String      |      Lugar    |
|       price   |   number      |     Precio    |
|       stock   |   number      |       stock   |

# Así lo vas a ver! 

https://github.com/AgustinR39/TiendaDeJuegos/blob/master/src/DOC/Video.mp4

### Funciones *CartContext*

🌱 *addItem* => añade el producto al carrito. En el caso de que el producto ya esté en el carrito, esta función va a evitar que se genere otra línea de ItemCart, solo modificará la cantidad de dicho producto.

🌱 *getQuantity* => esta función permite que cuando agregas productos al carrito se muestre la cantidad en el CartWidget.

🌱 *isInCart* => reconoce si el producto está o no en el carrito.

🌱 *clearCart* => esta función está asociada al botón de vaciar carrito y limpiará todo lo que se encuentre en el.

🌱 *removeItem* => esta función removerá el producto con ese id y seteará el nuevo valor del CartWidget.

🌱 *totalCost* => esta función calcula el valor total de la compra.
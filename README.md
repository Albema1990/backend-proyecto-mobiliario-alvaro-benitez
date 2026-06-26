# Backend Proyecto Cafe - Álvaro Benítez

## Descripción

API REST desarrollada con Node.js, Express y MongoDB Atlas para gestionar un catálogo de cafés de especialidad y accesorios.

La API permite:

- Gestión completa de productos (CRUD).
- Registro e inicio de sesión de usuarios.
- Autenticación mediante JWT.
- Protección de rutas mediante middleware.
- Panel de administración para usuarios administradores.
- Gestión de suscripciones a la newsletter.
- Persistencia de datos en MongoDB Atlas.
- Tests de la API.

## Tecnologías utilizadas
- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt
- dotenv
- cors
- Jest
- Supertest

## Arquitectura
src/
├── config
├── controllers
├── middlewares
├── models
├── routes
├── tests
├── utils
└── app.js

## Instalación

Clonar el repositorio:

git clone https://github.com/Albema1990/backend-proyecto-mobiliario-alvaro-benitez.git

cd backend-proyecto-mobiliario-alvaro-benitez

git switch dev
```

Cambiar a la rama dev:

```bash
git switch dev
```

Instala las dependencias:

```bash
npm install
```

## Variables de entorno

Crear un archivo .env utilizando como referencia .env-example.

Ejemplo:

PORT=3000

MONGO_URI=tu_uri_de_mongodb

JWT_SECRET=tu_clave_secreta

## Scripts

Iniciar servidor:
```
npm start
```

Modo desarrollo:
```
npm run dev
```
Ejecutar tests:
```
npm test
```

## Endpoints principales
### Productos
Método	Endpoint	Descripción
GET	/api/products	Obtener todos los productos
GET	/api/products/	Obtener un producto
POST	/api/products	Crear producto (requiere autenticación)
PUT	/api/products/	Actualizar producto
DELETE	/api/products/	Eliminar producto

### Autenticación
Método	Endpoint
POST	/api/auth/register
POST	/api/auth/login

### Newsletter
Método	Endpoint
POST	/api/newsletter

### Modelos
#### Product
- name
- description
- category
- price
- oldPrice
- image
- onSale
- bestSeller
- origin
- roast
- weight
- User
- username
- email
- password
- role
- Newsletter
- email

## Autenticación

La autenticación se realiza mediante JWT.

Tras iniciar sesión correctamente, el servidor genera un token que debe enviarse en la cabecera:

Authorization: Bearer <token>

Las rutas protegidas utilizan middleware para comprobar la autenticación y verificar que el usuario tenga permisos de administrador cuando sea necesario.

## Middlewares

La API incluye los siguientes middlewares:

authMiddleware
adminMiddleware

Estos protegen las rutas privadas y limitan determinadas operaciones exclusivamente a usuarios administradores.

## Base de datos

La aplicación utiliza MongoDB Atlas junto con Mongoose para gestionar:

Productos
Usuarios
Newsletter

## Tests

La API incluye tests utilizando:

Jest
Supertest

Ejecutarlos mediante:

npm test

## Deploy

Backend desplegado en:

https://backend-proyecto-mobiliario-alvaro.vercel.app/

## Autor

Proyecto desarrollado por Álvaro Benítez Mayorga como proyecto final del Bootcamp Full Stack Web Development de NEOLAND.
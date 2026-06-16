# Backend Proyecto Cafe - Álvaro Benítez


## Instalación

1. Clona el repositorio

```bash
git clone <repository_url>
```

2. Navega al directorio del proyecto:

```bash
cd backend-proyecto-mobiliario-alvaro-benitez
```

3. Cambiar a la rama dev:

```bash
git switch dev
```

4. Instala las dependencias:

```bash
npm install
```

5. Crea un archivo `.env` basado en el archivo `.env-example` y configura tus variables de entorno:

```bash
cp .env-example .env
```

Luego, edita el archivo `.env` para agregar tu configuración personalizada, como el puerto y la URI de MongoDB.

6. Inicia el servidor:
```bash
npm start
```

Para desarrollo con recarga automática, puedes usar:
``` bash
npm run dev
```

## Uso

Una vez que el servidor esté en funcionamiento, puedes acceder a la API a través de `http://localhost:<PORT>/api`, donde <PORT> es el puerto que configuraste en tu archivo `.env`.

## Obtener todos los productos

método GET a `/api/products` para obtener una lista de todos los productos.

response: 
```json
{
    "oldPrice": 0,
    "bestSeller": false,
    "_id": "6a3059c58e90d67ece6726eb",
    "name": "Etiopia",
    "category": "Café",
    "price": 16.95,
    "image": "",
    "onSale": true,
    "origin": "Etiopía, África",
    "roast": "Medio",
    "weight": "250g",
    "createdAt": "2026-06-15T20:00:05.124Z",
    "updatedAt": "2026-06-15T20:00:05.124Z"
  },
```

## Obtener un producto por su ID

método GET a `/api/products/:id` para obtener un producto por ID

response:

status 200
```json
{
  "oldPrice": 0,
  "bestSeller": false,
  "_id": "6a3059c58e90d67ece6726eb",
  "name": "Etiopia",
  "description": "Café de especialidad con notas florales y cítricas",
  "category": "Café",
  "price": 16.95,
  "image": "",
  "onSale": true,
  "origin": "Etiopía, África",
  "roast": "Medio",
  "weight": "250g",
  "__v": 0,
  "createdAt": "2026-06-15T20:00:05.124Z",
  "updatedAt": "2026-06-15T20:00:05.124Z"
}
```

status 404
```json
{
    "message": "Producto no encontrado" 
}
```
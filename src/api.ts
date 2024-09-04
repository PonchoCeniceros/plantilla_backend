import express, { Request, Response } from 'express';

/**
 * se instancia la API
 */
const api = express();

/**
 * ruta base de la API
 */
api.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

/**
 * middleware que solo analiza JSON y solo observa
 * las solicitudes en las que el encabezado de tipo
 * de contenido coincide con la opción de tipo
 */
api.use(express.json());

/**
 * router general de la API:
 * aqui se definen las rutas base para las
 * diversas funcionalidades de la aplicación
 */
export default api;

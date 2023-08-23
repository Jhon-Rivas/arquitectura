import { Router } from "express";
import Producto from "./producto.routes.js"
import Auth from "./auth.routes.js"

const router = Router();

const generalRouters =[
    {path: '/auth' , route : Auth},
    {path: '/producto' , route : Producto}

];

generalRouters.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
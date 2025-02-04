import { Router } from "express";
import { actualizarPerfilUsuario } from "@controller/index";

const router: Router = Router();

router.post("/datos", actualizarPerfilUsuario);


export default router;

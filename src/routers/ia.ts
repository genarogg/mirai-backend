import { Router } from "express";
import { analizarImgAzura } from "@controller/index";
import { uploadFile, verificarTokenUtil } from "@fn";


const router: Router = Router();

router.post("/analizer-colorimetria/azura", analizarImgAzura);

router.post("/up", uploadFile, analizarImgAzura);

export default router;

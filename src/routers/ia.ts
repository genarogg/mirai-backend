import { Router } from "express";
import { analizarImgGenericoHindra } from "@controller/index";
import { uploadFile } from "@fn";


const router: Router = Router();



router.post("/up", uploadFile, analizarImgGenericoHindra);

export default router;

import { Router } from "express";
import { analizarImgGenericoHindra,analizarImgChange } from "@controller/index";
import { uploadFile } from "@fn";


const router: Router = Router();

router.post("/up", uploadFile, analizarImgGenericoHindra);
router.post("/change", uploadFile, analizarImgChange);

export default router;

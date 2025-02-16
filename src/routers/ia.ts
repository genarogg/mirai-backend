import { Router } from "express";
import { analizarImgGenericoHindra, analizarImgChange, comoMeQueda } from "@controller/index";
import { uploadFile } from "@fn";



const router: Router = Router();

router.post("/up", uploadFile, analizarImgGenericoHindra);
router.post("/change", uploadFile, analizarImgChange);
router.post("/meQueda", comoMeQueda);

export default router;

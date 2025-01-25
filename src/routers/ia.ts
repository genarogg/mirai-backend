import { Router } from "express";
import { analizarImgAzura } from "@controller/index";
import { uploadFile } from "@fn";

const router: Router = Router();

router.post("/analizer-colorimetria/azura", analizarImgAzura);
router.post("/up", uploadFile, (req, res) => { console.log("hola") });

export default router;

import { Router } from "express";
import { analizarImgAzura} from "@controller/index";

const router: Router = Router();

router.get("/analizer-colorimetria/azura", analizarImgAzura);

export default router;

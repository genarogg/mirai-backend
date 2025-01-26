import { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";
import fs from "fs";
import svg from "./svg"; // Asegúrate de que la ruta sea correcta
import { verificarTokenUtil, errorResponse } from "@fn"
// Configuración de multer con renombrado de archivo

const folder = '../../public/uploads/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, folder));
    },
    filename: (req, file, cb) => {
        const hash = crypto.randomBytes(8).toString('hex');
        const ext = path.extname(file.originalname);
        req.body.nameImg = hash;
        cb(null, `${hash}${ext}`);
    }
});

const upload = multer({ storage });

const uploadFile = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).send({ message: 'Token no proporcionado' });
    }

    const usuario = await verificarTokenUtil(token)

    if (!usuario) {
        return errorResponse({ message: "Token no válido" })
    }


    upload.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(400).send({ message: 'Error uploading file.' });
        }

        if (!req.file) {
            
            return res.status(400).send({ message: 'No file uploaded.' });
        }

        try {
            const filePath = path.join(__dirname, folder, req.file.filename);
            const image = sharp(filePath);
            const metadata = await image.metadata();

            // Redimensionar la imagen si es mayor a 500x500
            if ((metadata.width && metadata.width > 500) || (metadata.height && metadata.height > 500)) {
                await image.resize(500, 500, {
                    fit: sharp.fit.contain,
                    background: { r: 255, g: 255, b: 255, alpha: 0 }
                }).toFile(path.join(__dirname, folder, `${path.parse(req.file.filename).name}_500x500${path.extname(req.file.filename)}`));
            }

            const imageBuffer = await image.toBuffer();
            const base64Image = imageBuffer.toString('base64');

            const svgContent = svg({ base64: `${base64Image}` });
            const svgFilePath = path.join(__dirname, folder, `${path.parse(req.file.filename).name}.svg`);

            fs.writeFileSync(svgFilePath, svgContent);

            // Cargar la información en base64 de la imagen en el cuerpo de la respuesta
            req.body.usuario = usuario
            req.body.base64Img = base64Image;

            next();
        } catch (processingError) {
            return res.status(500).send({ message: 'Error processing file.' });
        }
    });
};

export default uploadFile;
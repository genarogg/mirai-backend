import { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";
import crypto from "crypto";

// Configuración de multer con renombrado de archivo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/uploads/'));
    },
    filename: (req, file, cb) => {
        const hash = crypto.randomBytes(8).toString('hex');
        const ext = path.extname(file.originalname);
        cb(null, `${hash}${ext}`);
    }
});

const upload = multer({ storage });

const uploadFile = (req: Request, res: Response, next: NextFunction) => {
    upload.single('file')(req, res, (err) => {
        if (err) {
            return res.status(400).send({ message: 'Error uploading file.' });
        }
        console.log('File uploaded successfully:', req.file);
        next();
    });
};

export default uploadFile;
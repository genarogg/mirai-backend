import { Request, Response, NextFunction } from 'express';
import Busboy from 'busboy';
import fs from 'fs';
import path from 'path';

const uploadDir = path.join(__dirname, '../public/upload');

const uploadFile = (req: Request, res: Response, next: NextFunction) => {
    const busboy = Busboy({ headers: req.headers });

    busboy.on('file', (fieldname: string, file: NodeJS.ReadableStream, filename: string | { filename: string }, encoding: string, mimetype: string) => {
        let actualFilename: string;
        if (typeof filename === 'string') {
            actualFilename = filename;
        } else if (filename && typeof filename.filename === 'string') {
            actualFilename = filename.filename;
        } else {
            console.error('Filename is not a string:', filename);
            return;
        }

        const saveTo = path.join(uploadDir, path.basename(actualFilename));
        file.pipe(fs.createWriteStream(saveTo));
    });

    busboy.on('finish', () => {
        res.status(200).send('Archivo subido exitosamente');
    });

    req.pipe(busboy);
};

export default uploadFile;
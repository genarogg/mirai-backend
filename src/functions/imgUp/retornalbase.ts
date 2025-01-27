import fs from 'fs';
import path from 'path';

const base64ToImageMiddleware = (req: any, res: any, next: any) => {
    const { base64Image, filename } = req.body; // Suponiendo que la imagen y el nombre del archivo vienen en el cuerpo de la solicitud

    if (!base64Image || !filename) {
        return res.status(400).json({ message: 'Faltan datos: base64Image o filename.' });
    }

    // Elimina el encabezado de los datos base64 (si está presente)
    const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');

    // Decodifica el base64
    const buffer = Buffer.from(base64Data, 'base64');

    // Ruta donde se guardará la imagen
    const savePath = path.join(__dirname, 'uploads', filename);

    // Guarda la imagen en el sistema de archivos
    fs.writeFile(savePath, buffer, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error al guardar la imagen.', error: err });
        }

        res.status(200).json({ message: 'Imagen guardada correctamente.', path: savePath });
    });
};

module.exports = base64ToImageMiddleware;

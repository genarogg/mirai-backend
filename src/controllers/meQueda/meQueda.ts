import ollama from 'ollama';
import { Request, Response } from 'express';

import { verificarTokenUtil } from '@fn';

import contruirPromt from "./initPromt"

const comoMeQueda = async (req: Request, res: Response) => {

    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'No se ha proporcionado un token' });
    }

    const usuario = await verificarTokenUtil(token);

    const promt = await contruirPromt({ slug: req.body.slug, usuario });

    try {
        const responseStream = await ollama.chat({
            model: 'llama3',
            messages: [{
                role: 'user',
                content: promt,
            }],
            stream: true
        });

        res.setHeader('Content-Type', 'text/event-stream');
        res.setHeader('Cache-Control', 'no-cache');
        res.setHeader('Connection', 'keep-alive');
        // data: {"model":"llama3","created_at":"2025-02-16T18:00:14.8264835Z","message":{"role":"assistant","content":"Prom"},"done":false}
        try {
            for await (const chunk of responseStream) {
                res.write(`data: ${JSON.stringify(chunk.message.content)}\n\n`);
            }
            res.end();
        } catch (error) {
            console.error('Error en el streaming de respuestas:', error);
            res.status(500).json({ error: 'Error en el streaming de respuestas' });
        }

    } catch (error) {
        console.error('Error al obtener la respuesta del modelo:', error);
        res.status(500).json({ error: 'Error al obtener la respuesta del modelo' });
    }
};

export default comoMeQueda;
import ollama from 'ollama';
import { Request, Response } from 'express';

const comoMeQueda = async (req: Request, res: Response) => {

    console.log(req.body)

    try {
        const responseStream = await ollama.chat({
            model: 'llama3',
            messages: [{
                role: 'user',
                content: "que es un promt",
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
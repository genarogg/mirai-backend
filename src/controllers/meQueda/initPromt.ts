import buscarInformacionDelProducto from './buscarInformacion/product';
import { prisma } from '@fn';

const contruirPromt = async ({ slug, usuario }: any) => {
    const infoProducto = await buscarInformacionDelProducto({ slug });

    console.log(infoProducto);
    console.log(usuario.id);

    // Obtener datos de AnalisisFacial y UserProfile
    const user = await prisma.user.findUnique({
        where: { id: usuario.id },
        include: {
            AnalisisFacial: true,
            userProfile: true,
        },
    });

    // Extraer datos relevantes del producto
    const productoTitulo = infoProducto.titulo;
    const productoDescription = infoProducto.description;
    const productoTallas = infoProducto.tallas
        .map((t: any) => `Color: ${t.color}, Talla: ${t.talla}`)
        .join('; ');
    const productoEspecificaciones = Object.entries(infoProducto.especificaciones)
        .map(([key, value]) => `${key}: ${value}`)
        .join(', ');
    const productoEtiquetas = infoProducto.etiquetas
        .map((e: any) => e.etiqueta)
        .join(', ');

    // Extraer datos relevantes del usuario
    const perfil = user?.userProfile[0];
    const analisis = user?.AnalisisFacial[0];

    // Construir el prompt para la IA
    const prompt = `
        NOTA: las respuestas siempre en español por favor
        
        eres un experto de moda y marketing, me gustaría saber tu opinión sobre una prenda que me quiero comprar.

        Tengo un producto: "${productoTitulo}".
        Descripción: ${productoDescription}
        Tallas disponibles: ${productoTallas}.
        Especificaciones: ${productoEspecificaciones}.
        Etiquetas: ${productoEtiquetas}.

        Mi información:
        - Sexo: ${perfil?.sexo}
        - Talla de ropa habitual: ${perfil?.tallaDeRopa}
        - Altura: ${perfil?.altura}
        - Peso: ${perfil?.peso}
        - Etnia: ${perfil?.etnia}
        
        Análisis facial:
        - Tono de piel: ${analisis?.tonoDePiel}
        - Color de piel: ${analisis?.colorDePiel}
        - Color de pelo: ${analisis?.colorDePelo}
        - Color de ojos: ${analisis?.colorDeOjos}

        Análisis colorimétrico:
        - Subtono de piel: ${analisis?.subtonoDePiel}
        - Estación del año: ${analisis?.estacionDelAno}
        - Tipo de rostro: ${analisis?.tipoDeRostro}
        - Sistema Fitzpatrick: ${analisis?.sistemaFitzpatrick}
        - Pantone Skintone: ${analisis?.PantoneSkintone}
        - NARS Skin Tone System: ${analisis?.NARSSkinToneSystem}
        - LOreal Color Code: ${analisis?.LOrealColorCode}
        - Color Me Beautiful: ${analisis?.ColorMeBeautiful}
        - Munsell Color System: ${analisis?.MunsellColorSystem}

        ¿Crees que esta prenda me queda bien y se adapta a mi estilo y características?

        al final dame un porcentaje de cuanto por ciento crees que me queda bien

    
    `;

    return prompt;

    // Aquí puedes enviar el prompt a la IA
};

export default contruirPromt;

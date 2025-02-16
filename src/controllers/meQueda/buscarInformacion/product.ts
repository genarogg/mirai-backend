

const PRODUCT_QUERY = `
  query ($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      titulo
      description
      prenda
      tallas {
        color
        talla
      }
      especificaciones {
        fit
        forro
        grosor
        Materiales
        transparency
      }
      categorias {
        nombre
      }
      etiquetas {
        etiqueta
      }
    }
  }
`;

const buscarInformacionDelProducto = async ({ slug }: any) => {
    const endpoint = "http://localhost:1337/graphql";

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: PRODUCT_QUERY,
                variables: { slug },
            }),
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud de GraphQL');
        }

        const { data } = await response.json();

        const newData = {
            titulo: data.products[0].titulo,
            description: data.products[0].description[0].children[0].text,
            prenda: data.products[0].prenda,
            tallas: data.products[0].tallas,
            especificaciones: data.products[0].especificaciones,
            categorias: data.products[0].categorias,
            etiquetas: data.products[0].etiquetas,
        }

        return newData;
    } catch (error) {
        console.error('Error al buscar la información del producto:', error);
        throw error;
    }
};

export default buscarInformacionDelProducto;
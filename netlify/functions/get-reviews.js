export async function handler(event, context) {
  const apiKey = 'AIzaSyCtHXwXyZ5vXhiU_n2tKr27snAQ-z1hBm8'; // reemplaza aquí si quieres, o usa ENV vars
  const placeId = 'ChIJbc4eWY9MQg0RcGlmrUF-Xz8';
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=reviews&language=es&key=${apiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error al obtener reseñas', detalle: error.message })
    };
  }
}


export async function consultar(page = 1) {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = import.meta.env.VITE_API_URL;
  const urlConKey = `${apiUrl}?api_key=${apiKey}&page=${page}`;

  
    const consulta = await fetch(urlConKey);
    const data = await consulta.json();
    return data;
}


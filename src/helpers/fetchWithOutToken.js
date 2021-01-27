const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchWithOutToken = async (endpoint, data, method = 'GET') => {
  const urlFetch = `${baseUrl}/${endpoint}`;
  if (method === 'GET') {
    try {
      const response = await fetch(urlFetch);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const response = await fetch(urlFetch, {
        method,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
};

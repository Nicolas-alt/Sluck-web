const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const fetchWithToken = async (endpoint, data, method = 'GET') => {
  const urlFetch = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('tokenSluck') || '';
  if (method === 'GET') {
    try {
      const response = await fetch(urlFetch, {
        headers: {
          Authorization: token,
        },
      });
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
          Authorization: token,
        },
        body: JSON.stringify(data),
      });

      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
};

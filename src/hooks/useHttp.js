export const useHttp = () => {

  const request = async (url, method = 'GET', body = null, headers = {
		'X-RapidAPI-Key': '8693aae1edmshf2e4d3330300762p1967fejsn00ac12d8f8d0',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
	}) => {

    try {
      const response = await fetch(url, {method, body, headers});

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  return {request}

}
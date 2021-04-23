export default function postData(url = '', data = {}) {
  return async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const value = await response.json();
      console.log(value);
      return value;
    } catch (error) {
      console.log('Возникла проблема с вашим fetch запросом: ', error.message);
      return error;
    }
  };
}

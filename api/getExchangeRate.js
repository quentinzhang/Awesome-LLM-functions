const authorizeRequest = require('./utils/authorizeRequest');

module.exports = async (req, res) => {
  // API Key checking
  if (!authorizeRequest(req, res)) {
    return;
  }

  let axios;
  await import('axios').then(importedAxios => {
    axios = importedAxios.default;
  });

  if (!axios) {
    return res.status(500).send('Axios is not initialized');
  }

  const EXCHANGE_RATE_API_KEY = process.env.EXCHANGE_RATE_API_KEY;

  const { fromCurrency, toCurrency, amount } = req.body || req.query;

  let url = `https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/pair/${fromCurrency}/${toCurrency}`;
  if (amount) {
    url += `/${amount}`;
  }

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.result === 'success') {
      const exchangeInfo = {
        conversion_rate: data.conversion_rate,
      };
      if (data.conversion_result) {
        exchangeInfo.conversion_result = data.conversion_result;
      }
      res.status(200).json(exchangeInfo);
    } else {
      res.status(500).send('Could not fetch exchange rates');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).send('Internal Server Error');
  }
};

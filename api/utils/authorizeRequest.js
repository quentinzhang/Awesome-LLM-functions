// authorizeRequest.js
const authorizeRequest = (req, res) => {
  const headerValue = req.headers['authorization'];
  const expectedApiKey = process.env.EXPECTED_API_KEY

  if (!expectedApiKey) {
    console.error("Error: The EXPECTED_API_KEY environment variable is not set.");
    process.exit(1);
  }

  if (headerValue && headerValue.startsWith('Bearer ')) {
    const apiKey = headerValue.slice(7);

    if (!apiKey || apiKey !== expectedApiKey) {
      return res.status(401).json({ error: "Unauthorized, invalid API key" });
    }
  } else {
    return res.status(401).json({ error: "no API key provided" });
  }

  return true;
};

module.exports = authorizeRequest;
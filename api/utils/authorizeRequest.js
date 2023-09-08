const authorizeRequest = (req, res) => {
  const headerValue = req.headers['authorization'];
  const expectedApiKey = process.env.EXPECTED_API_KEY;

  // if EXPECTED_API_KEY was not set, then bypasses the verification step
  if (!expectedApiKey || expectedApiKey.trim() === "") {
    return true;
  }

  if (headerValue && headerValue.startsWith('Bearer ')) {
    const apiKey = headerValue.slice(7);

    if (!apiKey || apiKey !== expectedApiKey) {
      return res.status(401).json({ error: "Unauthorized, invalid API key" });
    }
  } else {
    return res.status(401).json({ error: "No API key provided" });
  }

  return true;
};

module.exports = authorizeRequest;
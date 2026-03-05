const { handleClerkWebhook } = require('../../../lib/clerk-stripe-integration');

const config = { api: { bodyParser: false } };

async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const payload = await getRawBody(req);
    const headers = {
      'svix-id': req.headers['svix-id'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature'],
    };
    await handleClerkWebhook(payload, headers);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Clerk webhook error:', error.message);
    res.status(400).json({ error: error.message });
  }
}

module.exports = handler;
module.exports.config = config;

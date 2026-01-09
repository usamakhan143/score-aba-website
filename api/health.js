export default function handler(req, res) {
  res.status(200).json({
    status: 'OK',
    service: 'Score ABA API',
    timestamp: new Date().toISOString(),
    env: {
      hasMailHost: !!process.env.MAIL_HOST,
      hasMailUser: !!process.env.MAIL_USER,
      hasMailTo: !!process.env.MAIL_TO
    }
  });
}

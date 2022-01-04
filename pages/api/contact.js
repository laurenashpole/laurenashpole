import { getTransporter } from '../../utils/mailers';

export default async (req, res) => {
  if (!req.body || !req.body.email || !req.body.name || !req.body.message) {
    return res.status(422).json({});
  }

  const transporter = await getTransporter();

  transporter.sendMail({
    from: `"CONTACT FORM" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,
    subject: req.body.subject || 'General Questions',
    text: req.body.message,
    html: `<p>Message from: ${req.body.email} (${req.body.name})</p><p>${req.body.message}</p>`
  }, (err) => {
    if (err) {
      return res.status(500).json({});
    }

    res.json({});
  });
};
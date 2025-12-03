import { getTransporter } from '../../utils/mailers';

export default (req, res) => {
  if (!req.body || !req.body.email || !req.body.name || !req.body.message) {
    return res.status(422).json({});
  }

  const transporter = getTransporter();

  transporter
    .sendMail({
      to: process.env.EMAIL,
      from: `"CONTACT FORM" <${process.env.EMAIL}>`,
      subject: req.body.subject || 'General Questions',
      text: req.body.message,
      html: `<p>Message from: ${req.body.email} (${req.body.name})</p><p>${req.body.message}</p>`,
    })
    .then(() => res.json({}))
    .catch(() => res.status(500).json({}));
};

import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  if (!req.body || !req.body.email || !req.body.name || !req.body.message) {
    return res.status(422).json({});
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  sgMail.send({
    to: process.env.EMAIL,
    from: `"CONTACT FORM" <${process.env.EMAIL}>`,
    subject: req.body.subject || 'General Questions',
    text: req.body.message,
    html: `<p>Message from: ${req.body.email} (${req.body.name})</p><p>${req.body.message}</p>`,
  })
    .then(() => res.json({}))
    .catch((err) => res.status(500).json({}));
};

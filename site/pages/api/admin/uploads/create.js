import { handleUpload } from '@vercel/blob/client';

import withPassport from '../../../../middleware/passport';

const handler = async (req, res, onComplete) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({});
  }

  try {
    const response = await handleUpload({
      body: req.body,
      request: req,
      onBeforeGenerateToken: async () => {
        return {
          addRandomSuffix: false,
          allowedContentTypes: [
            'image/jpeg',
            'image/png',
            'image/gif',
            'image/svg+xml',
          ],
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        onComplete && onComplete(blob, tokenPayload);
      },
    });

    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default (req, res) => {
  withPassport(req, res, handler);
};

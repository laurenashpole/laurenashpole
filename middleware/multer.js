import multer from 'multer';

const upload = multer({
  dest: './temp/'
});

export default (req, res, requireAuth, done) => {
  return new Promise ((resolve, reject) => {
    if (requireAuth && !req.isAuthenticated()) {
      reject(new Error());
    }

    upload.any()(req, res, (err) => {
      if (err) {
        reject(err);
      }

      resolve(done(req, res));
    });
  });
};
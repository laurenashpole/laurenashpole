import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
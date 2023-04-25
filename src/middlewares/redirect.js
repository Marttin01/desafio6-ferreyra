export function redirect(req, res, next) {
    if (req.method === 'POST') {
      res.redirect(req.originalUrl);
    } else {
      next();
    }
  }
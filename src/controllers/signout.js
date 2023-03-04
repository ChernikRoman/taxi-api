function desktopSignOut(req, res, next) {
  try {
    res.clearCookie('token');
    res.status(200).end();
  } catch (err) {
    next(err.message);
  }
}

module.exports = desktopSignOut;

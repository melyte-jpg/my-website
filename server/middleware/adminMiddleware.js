module.exports = (req, res, next) => {
  const { role } = req.body; // simple version

  if (role !== "admin") {
    return res.status(403).json({ message: "Admin only access" });
  }

  next();
};

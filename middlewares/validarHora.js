module.exports = (req, res, next) => {
  const hora = req.hora;
  if (hora >= 12 && hora <= 24) {
    next();
  } else {
    const mensaje = 'Aún no son las 12 de la mañana';
    return res.redirect('/?mensaje=' + encodeURIComponent(mensaje));
  }
};

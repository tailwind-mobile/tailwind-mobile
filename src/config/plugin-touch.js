module.exports = (plugin) =>
  plugin(({ addUtilities }) => {
    const touch = {};
    const values = ['pan-x', 'pan-y', 'none', 'manipulation'];
    values.forEach((value) => {
      touch[`.touch-${value}`] = {
        'touch-action': value,
      };
    });
    addUtilities(touch);
  });

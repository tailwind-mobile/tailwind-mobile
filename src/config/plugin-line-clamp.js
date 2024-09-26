module.exports = (plugin) =>
  plugin(({ addUtilities }) => {
    const lineClamp = {};
    Array.from({ length: 10 }).forEach((_, index) => {
      lineClamp[`.line-clamp-${index + 1}`] = {
        overflow: 'hidden',
        display: '-webkit-box',
        '-webkit-line-clamp': `${index + 1}`,
        '-webkit-box-orient': 'vertical',
      };
    });
    addUtilities(lineClamp);
  });

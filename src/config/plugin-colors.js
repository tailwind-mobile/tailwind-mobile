const hexToRgb = require('./hex-to-rgb.js');
const iosColors = require('./ios-colors.js');
const mdColors = require('./md-colors.js');

const rulesForColor = (name, hex) => {
  if (!hex.includes('#') || name === 'primary') return {};
  const data = {};
  const colors = {
    primary: hex,
    ...iosColors(hex),
    ...mdColors(hex),
  };
  Object.keys(colors).forEach((key) => {
    data[`--k-color-${key}`] = hexToRgb(colors[key]).join(' ');
  });

  return {
    [`.k-color-${name}`]: data,
  };
};

module.exports = (plugin, konstaConfig) =>
  plugin(({ addUtilities }) => {
    const themeColors = konstaConfig.colors;

    const colors = {};

    Object.keys(themeColors).forEach((name) => {
      Object.assign(colors, rulesForColor(name, themeColors[name]));
    });

    addUtilities(colors);
  });

const path = require('path');
const plugin = require('windicss/plugin');
const configExtend = require('./config/config-extend.js');
const extendTheme = require('./config/extend-theme.js');

const pluginBase = require('./config/plugin-base.js');
const pluginColors = require('./config/plugin-colors.js');
const pluginPreloader = require('./config/plugin-preloader.js');
const pluginHairlines = require('./config/plugin-hairlines.js');
const pluginTouchRipple = require('./config/plugin-touch-ripple.js');
const pluginIosMaterial = require('./config/plugin-ios-material.js');
const pluginLineClamp = require('./config/plugin-line-clamp.js');
const pluginSafeAreas = require('./config/plugin-safe-areas.js');
const pluginTranslucent = require('./config/plugin-translucent.js');
const pluginRange = require('./config/plugin-range.js');
const pluginTouch = require('./config/plugin-touch.js');
const pluginNoScrollbar = require('./config/plugin-no-scrollbar.js');

const content = `${path.resolve(__dirname)}/**/*.{js,jsx,vue,svelte}`;

const config = (userConfig = {}) => {
  const userConfigKonsta = { ...(userConfig.konsta || {}) };
  const userConfigModified = { ...userConfig };
  delete userConfigModified.konsta;

  const konstaConfig = {
    colors: {
      primary: '#007aff',
      ...(userConfigKonsta.colors || {}),
    },
  };

  const newConfig = configExtend(
    {},
    {
      theme: {
        extend: extendTheme(konstaConfig),
      },
      plugins: [
        pluginBase(plugin, userConfig, konstaConfig),
        pluginPreloader(plugin),
        pluginIosMaterial(plugin),
        pluginHairlines(plugin),
        pluginTouchRipple(plugin),
        pluginLineClamp(plugin),
        pluginSafeAreas(plugin),
        pluginTranslucent(plugin),
        pluginRange(plugin),
        pluginTouch(plugin),
        pluginNoScrollbar(plugin),
        pluginColors(plugin, konstaConfig),
      ],
    },
    userConfigModified
  );

  if (!newConfig.content) {
    newConfig.content = [content];
  } else if (Array.isArray(newConfig.content)) {
    newConfig.content = [...newConfig.content, content];
  } else if (newConfig.content.files) {
    newConfig.content.files = [...newConfig.content.files, content];
  } else if (!newConfig.content.files) {
    newConfig.content.files = [content];
  }

  return newConfig;
};
module.exports = config;

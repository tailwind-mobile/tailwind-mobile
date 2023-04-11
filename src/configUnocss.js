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

const config = (optionsG = {}) => {
  const konstaConfig = {
    dark: optionsG.dark || 'class',
    colors: {
      primary: '#007aff',
    },
  };
  const rules = [
    // [/^text-(.*)$/, ([, c], { theme }) => {
    //   if (theme.colors[c])
    //     return { color: theme.colors[c] }
    // }],
    // [/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` }), { layer: 'utilities' }],
    // when you omit the layer, it will be `default`
    // ['btn', { padding: '4px' }],
  ];
  const shortcuts = [
    //  // you could still have object style
    // {
    //   btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    // },
    // // dynamic shortcuts
    // [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ];
  const variants = [
    //  // hover:
    // (matcher) => {
    //   if (!matcher.startsWith('hover:'))
    //     return matcher
    //   return {
    //     // slice `hover:` prefix and passed to the next variants and rules
    //     matcher: matcher.slice(6),
    //     selector: s => `${s}:hover`,
    //   }
    // }
  ];
  const preflights = [
    // {
    //   layer: 'my-layer',
    //   getCSS: async () => (await fetch('my-style.css')).text(),
    // },
  ];
  // const preprocess = (_matcher) => {
  //   // return matcher.startsWith('prefix-')
  //   //   ? matcher.slice(7)
  //   //   : undefined // ignore
  //   return undefined;
  // };

  const plugin = (plg) => {
    // plg is a PostCSS plugin
    plg({
      config: (key) => konstaConfig[key],
      theme: (key) => konstaConfig[key],
      addBase: (res) => {
        Object.entries(res).forEach(([selector, properties]) => {
          if (typeof selector === 'string') {
            rules.push([selector, properties]);
          } else if (typeof selector === 'object') {
            Object.entries(selector).forEach(
              ([nestedSelector, nestedProperties]) => {
                rules.push([nestedSelector, nestedProperties]);
              }
            );
          }
        });
      },
      addUtilities: (res, options = {}) => {
        Object.entries(res).forEach(([selector, properties]) => {
          const layer = options.layer || 'utilities';
          if (typeof selector === 'string') {
            rules.push([selector, properties, { layer }]);
          } else if (typeof selector === 'object') {
            Object.entries(selector).forEach(
              ([nestedSelector, nestedProperties]) => {
                rules.push([nestedSelector, nestedProperties, { layer }]);
              }
            );
          }
        });
      },
      addComponents: (res, options = {}) => {
        Object.entries(res).forEach(([selector, properties]) => {
          const layer = options.layer || 'components';
          if (typeof selector === 'string') {
            rules.push([selector, properties, { layer }]);
          } else if (typeof selector === 'object') {
            Object.entries(selector).forEach(
              ([nestedSelector, nestedProperties]) => {
                rules.push([nestedSelector, nestedProperties, { layer }]);
              }
            );
          }
        });
      },
      addVariant(name, variantFn) {
        variants.push([name, variantFn]);
      },
    });
  };
  pluginBase({}, konstaConfig, plugin);
  pluginPreloader(plugin);
  pluginIosMaterial(plugin);
  pluginHairlines(plugin);
  pluginTouchRipple(plugin);
  pluginLineClamp(plugin);
  pluginSafeAreas(plugin);
  pluginTranslucent(plugin);
  pluginRange(plugin);
  pluginTouch(plugin);
  pluginNoScrollbar(plugin);
  pluginColors(konstaConfig, plugin);

  return {
    name: 'unocss-preset-konstaui',
    extendTheme(theme) {
      theme.colors = {
        ...konstaConfig.colors,
      };
    },
    rules,
    variants,
    shortcuts,
    preflights,
    // preprocess,
  };
};

module.exports = config;

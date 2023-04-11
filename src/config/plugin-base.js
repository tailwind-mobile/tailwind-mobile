const hexToRgb = require('./hex-to-rgb.js');
const iosColors = require('./ios-colors.js');
const mdColors = require('./md-colors.js');

module.exports = (userConfig = {}, konstConfig = {}, plugin) => {
  let iosFont =
    '-apple-system, SF Pro Text, SF UI Text, system-ui, Helvetica Neue, Helvetica, Arial, sans-serif';
  let materialFont = 'Roboto, system-ui, Noto, Helvetica, Arial, sans-serif';

  const getFonts = (ff) => {
    if (ff.ios) {
      iosFont = Array.isArray(ff.ios) ? ff.ios.join(', ') : ff.ios;
    }
    if (ff.material) {
      materialFont = Array.isArray(ff.material)
        ? ff.material.join(', ')
        : ff.material;
    }
  };
  if (
    userConfig &&
    userConfig.theme &&
    userConfig.theme.extend &&
    userConfig.theme.extend.fontFamily
  ) {
    getFonts(userConfig.theme.extend.fontFamily);
  }

  if (userConfig && userConfig.theme && userConfig.theme.fontFamily) {
    getFonts(userConfig.theme.fontFamily);
  }

  return plugin(({ addBase, config }) => {
    const darkMode = config('darkMode');
    let darkProps = {};
    if (darkMode === 'class') {
      darkProps = {
        '.dark': {
          backgroundColor: '#000',
          '--k-hairline-color': 'rgba(255, 255, 255, 0.15)',
          color: '#fff',
        },
      };
    } else if (darkMode === 'media') {
      darkProps = {
        '@media (prefers-color-scheme: dark)': {
          ':root': {
            backgroundColor: '#000',
            '--k-hairline-color': 'rgba(255, 255, 255, 0.15)',
            color: '#fff',
          },
        },
      };
    }

    const primaryColors = {
      ...iosColors(konstConfig.colors.primary),
      ...mdColors(konstConfig.colors.primary),
    };
    Object.keys(konstConfig.colors).forEach((key) => {
      primaryColors[key] = konstConfig.colors[key];
    });
    const primaryColorVars = {};

    Object.keys(primaryColors).forEach((key) => {
      primaryColorVars[`--k-color-${key}`] = hexToRgb(primaryColors[key]).join(
        ' '
      );
    });

    addBase({
      ':root': {
        '--k-device-pixel-ratio': '1',
        '--k-hairline-color': 'rgba(0, 0, 0, 0.2)',
        ...primaryColorVars,
      },
      ...darkProps,
      '@media (min-resolution: 1.25dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '1.25',
        },
      },
      '@media (min-resolution: 1.5dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '1.5',
        },
      },
      '@media (min-resolution: 1.75dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '1.75',
        },
      },
      '@media (min-resolution: 2dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '2',
        },
      },
      '@media (min-resolution: 2.25dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '2.25',
        },
      },
      '@media (min-resolution: 2.5dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '2.5',
        },
      },
      '@media (min-resolution: 3dppx)': {
        ':root': {
          '--k-device-pixel-ratio': '3',
        },
      },
      '*': {
        '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
        '-webkit-text-size-adjust': '100%',
      },
      body: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
      '.k-ios, .ios': {
        'font-family': iosFont,
      },
      '.k-material, .md': {
        'font-family': materialFont,
      },
    });
  });
};

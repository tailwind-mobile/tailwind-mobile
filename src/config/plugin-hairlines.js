module.exports = (plugin) =>
  plugin(({ addUtilities, theme }) => {
    const themeColors = theme('colors');
    const themeDurations = theme('transitionDuration');

    const hairlineColors = {};
    const hairlineDurations = {};

    const alphaValue = (v) => {
      return (v || '').replace('<alpha-value>', '0.2');
    };

    Object.keys(themeColors).forEach((key) => {
      const value = themeColors[key];
      if (typeof value === 'string') {
        hairlineColors[`.hairline-${key}`] = {
          '--k-hairline-color': alphaValue(value),
        };
      } else {
        Object.keys(value).forEach((subKey) => {
          const subValue = value[subKey];
          if (subKey === 'DEFAULT') {
            hairlineColors[`.hairline-${key}`] = {
              '--k-hairline-color': alphaValue(subValue),
            };
          } else {
            hairlineColors[`.hairline-${key}-${subKey}`] = {
              '--k-hairline-color': alphaValue(subValue),
            };
          }
        });
      }
    });
    Object.keys(themeDurations).forEach((key) => {
      if (key === 'DEFAULT') return;
      hairlineDurations[`.hairline-duration-${key}`] = {
        '--k-hairline-transition-duration': themeDurations[key],
      };
    });

    const common = {
      position: 'absolute',
      backgroundColor: 'var(--k-hairline-color, rgba(0,0,0,0.2))',
      transitionDuration: 'var(--k-hairline-transition-duration)',
      content: '""',
      zIndex: '10',
    };

    const hairlines = {
      '.hairline-t': {
        '&::before': {
          ...common,
          left: '0',
          top: '0',
          width: '100%',
          height: '1px',
          transformOrigin: 'center top',
          transform: 'scaleY(calc(1 / var(--k-device-pixel-ratio, 1)))',
        },
      },
      '.hairline-t-none': {
        '&::before': {
          display: 'none',
        },
        ':not(.hairline-l):before': {
          display: 'none',
        },
      },
      '.hairline-t-scale': {
        '&::before': {
          transform: 'scaleY(2)',
        },
      },
      '.hairline-l': {
        '&::before': {
          ...common,
          left: '0',
          top: '0',
          width: '1px',
          height: '100%',
          transformOrigin: 'left center',
          transform: 'scaleX(calc(1 / var(--k-device-pixel-ratio, 1)))',
        },
      },
      '.hairline-l-none': {
        '&::before': {
          display: 'none',
        },
        ':not(.hairline-l):before': {
          display: 'none',
        },
      },

      '.hairline-l-scale': {
        '&::before': {
          transform: 'scaleX(2)',
        },
      },
      '.hairline-b': {
        '&::after': {
          ...common,
          left: '0',
          bottom: '0',
          width: '100%',
          height: '1px',
          transformOrigin: 'center bottom',
          transform: 'scaleY(calc(1 / var(--k-device-pixel-ratio, 1)))',
        },
      },
      '.hairline-b-scale': {
        '&::after': {
          transform: 'scaleY(2)',
        },
      },
      '.hairline-b-none': {
        '&::after': {
          display: 'none',
        },
        ':not(.hairline-b)::after': {
          display: 'none',
        },
        '> * > *::after': {
          display: 'none',
        },
      },
      '.last-child-hairline-b-none': {
        '> *:last-child': {
          '&::after': {
            display: 'none',
          },
          ':not(.hairline-b)::after': {
            display: 'none',
          },
          '> * > *::after': {
            display: 'none',
          },
          '> *:after': {
            display: 'none',
          },
        },
      },
      '.last-child-hairline-r-none': {
        '> *:last-child': {
          '&::after': {
            display: 'none',
          },
          ':not(.hairline-b)::after': {
            display: 'none',
          },
          '> * > *:after': {
            display: 'none',
          },
          '> *:after': {
            display: 'none',
          },
        },
      },
      '.first-child-hairline-r-none': {
        '> *:first-child': {
          '&::after': {
            display: 'none',
          },
          ':not(.hairline-b)::after': {
            display: 'none',
          },
          '> * > *:after': {
            display: 'none',
          },
          '> *:after': {
            display: 'none',
          },
        },
      },
      '.hairline-r': {
        '&::after': {
          ...common,
          top: '0',
          right: '0',
          width: '1px',
          height: '100%',
          transformOrigin: 'right center',
          transform: 'scaleX(calc(1 / var(--k-device-pixel-ratio, 1)))',
        },
      },
      '.hairline-r-none': {
        '&::after': {
          display: 'none',
        },
        ':not(.hairline-r):after': {
          display: 'none',
        },
      },
      '.hairline-r-scale': {
        '&::after': {
          transform: 'scaleX(2)',
        },
      },
    };

    addUtilities(hairlineColors);
    addUtilities(hairlineDurations);
    addUtilities(hairlines);
  });

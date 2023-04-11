module.exports = (plugin) =>
  plugin(({ addUtilities, addBase, theme, e }) => {
    const base = {
      ':root': {
        '--k-safe-area-left': '0px',
        '--k-safe-area-right': '0px',
        '--k-safe-area-top': '0px',
        '--k-safe-area-bottom': '0px',
      },

      '@supports (left: env(safe-area-inset-left))': {
        '.safe-areas': {
          '--k-safe-area-left': 'env(safe-area-inset-left)',
          '--k-safe-area-right': 'env(safe-area-inset-right)',
          '--k-safe-area-top': 'env(safe-area-inset-top)',
          '--k-safe-area-bottom': 'env(safe-area-inset-bottom)',
        },
      },
    };
    const safe = {
      '.no-safe-areas': {
        '--k-safe-area-left': '0px',
        '--k-safe-area-right': '0px',
        '--k-safe-area-top': '0px',
        '--k-safe-area-bottom': '0px',
      },
      '.no-safe-areas-top': {
        '--k-safe-area-top': '0px',
      },
      '.no-safe-areas-right': {
        '--k-safe-area-right': '0px',
      },
      '.no-safe-areas-bottom': {
        '--k-safe-area-bottom': '0px',
      },
      '.no-safe-areas-left': {
        '--k-safe-area-left': '0px',
      },
    };
    const spacing = theme('spacing');
    ['top', 'right', 'bottom', 'left'].forEach((side) => {
      const first = side[0];
      const upper = `${side[0].toUpperCase()}${side.slice(1)}`;

      safe[`.p${first}-safe`] = {
        [`padding${upper}`]: `var(--k-safe-area-${side})`,
      };
      safe[`.m${first}-safe`] = {
        [`margin${upper}`]: `var(--k-safe-area-${side})`,
      };
      safe[`.${side}-safe`] = {
        [side]: `var(--k-safe-area-${side})`,
      };

      Object.keys(spacing).forEach((key) => {
        const value = spacing[key];
        safe[`.p${first}-${e(key)}-safe`] = {
          [`padding${upper}`]: `calc(var(--k-safe-area-${side}) + ${value})`,
        };
        safe[`.m${first}-${e(key)}-safe`] = {
          [`margin${upper}`]: `calc(var(--k-safe-area-${side}) + ${value})`,
        };
        safe[`.${side}-${e(key)}-safe`] = {
          [side]: `calc(var(--k-safe-area-${side}) + ${value})`,
        };
      });
    });
    addBase(base);
    addUtilities(safe);
  });

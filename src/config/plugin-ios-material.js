module.exports = (plugin) =>
  plugin(({ addVariant, e }) => {
    addVariant('material', ({ modifySelectors, separator }) => {
      modifySelectors(({ className, selector }) => {
        if (selector.includes(':after')) {
          return `.k-material .${e(`material${separator}${className}`)}::after`;
        }
        if (selector.includes(':before')) {
          return `.k-material .${e(
            `material${separator}${className}`
          )}::before`;
        }
        return `.k-material .${e(`material${separator}${className}`)}`;
      });
    });
    addVariant('ios', ({ modifySelectors, separator }) => {
      modifySelectors(({ className, selector }) => {
        if (selector.includes(':after')) {
          return `.k-ios .${e(`ios${separator}${className}`)}::after`;
        }
        if (selector.includes(':before')) {
          return `.k-ios .${e(`ios${separator}${className}`)}::before`;
        }
        return `.k-ios .${e(`ios${separator}${className}`)}`;
      });
    });
    // ios-active: and material-active: variants
    addVariant('material-active', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.k-material .${e(
          `material-active${separator}${className}`
        )}:active`;
      });
    });
    addVariant('ios-active', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.k-ios .${e(`ios-active${separator}${className}`)}:active`;
      });
    });
  });

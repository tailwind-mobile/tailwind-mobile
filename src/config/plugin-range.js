module.exports = (plugin) =>
  plugin(({ addVariant, e }) => {
    addVariant('range-thumb', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(
          `range-thumb${separator}${className}`
        )}::-webkit-slider-thumb`;
      });
    });
    addVariant('range-track', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.${e(
          `range-track${separator}${className}`
        )}::-webkit-slider-runnable-track`;
      });
    });
  });

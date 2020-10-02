require('@babel/register')({
  extensions: [ '.ts' ],
});

/**
 * Object.fromEntries() polyfill
 */
if (!Object.fromEntries) {
  Object.fromEntries = (entries) => entries.reduce((acc, [ key, value ]) => {
    return {
      ...acc,
      [key]: value,
    };
  }, {});
}

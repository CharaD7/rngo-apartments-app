module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'module-resolver',
      {
        alias: {
          '~assets': ['./assets'],
          '~assets/*': ['./assets/*'],
          '~components': ['./components'],
          '~components/*': ['./components/*'],
          '~constants': ['./constants'],
          '~constants/*': ['./constants/*'],
          '~hooks': ['./hooks'],
          '~hooks/*': ['./hooks/*'],
          '~navigation': ['./navigation'],
          '~navigation/*': ['./navigation/*'],
          '~screens': ['./screens'],
          '~screens/*': ['./screens/*'],
          '~types': ['./types'],
          '~types/*': ['./types/*'],
        },
      },
    ],
  };
};

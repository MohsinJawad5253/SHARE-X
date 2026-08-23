const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    assetRegistryPath: 'react-native/Libraries/Image/AssetRegistry',
  },
  resolver: {
    assetExts: [...assetExts.filter((ext) => ext !== 'svg'), 'pem', 'p12'],
    sourceExts: [...sourceExts, 'svg'],
    extraNodeModules: {
      'react-native/asset-registry': path.resolve(
        __dirname,
        'node_modules/react-native/Libraries/Image/AssetRegistry'
      ),
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
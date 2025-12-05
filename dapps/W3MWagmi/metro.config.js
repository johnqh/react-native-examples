const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    extraNodeModules: {
      stream: require.resolve('readable-stream'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      crypto: require.resolve('react-native-crypto'),
    },
    // Use browser field from package.json
    resolverMainFields: ['react-native', 'browser', 'main'],
    // Custom resolver to handle ws package (use native WebSocket in React Native)
    resolveRequest: (context, moduleName, platform) => {
      // Redirect ws to a shim that uses native WebSocket
      if (moduleName === 'ws' || moduleName.startsWith('ws/')) {
        return {
          filePath: require.resolve('./ws-shim.js'),
          type: 'sourceFile',
        };
      }
      // Let Metro handle other modules
      return context.resolveRequest(context, moduleName, platform);
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);

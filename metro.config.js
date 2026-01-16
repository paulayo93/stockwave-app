const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname, {
  isCSSEnabled: true,
});

config.transformer.minifierConfig = {
  compress: {
    /*remove console.log statement in production*/
    drop_console: true,
  },
};

module.exports = withNativeWind(config, { input: './global.css' });

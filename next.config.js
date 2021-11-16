/**
 * @type {import('next').NextConfig}
 */
const webpack = require('webpack');

const { parsed: myEnv } = require('dotenv').config();

const nextConfig = {
  /* config options here */
}
  
//module.exports = nextConfig

module.exports = {
  webpack(config) {
      config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
      return config
  },
  
  nextConfig
}
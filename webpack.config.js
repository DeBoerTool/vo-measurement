module.exports = {
  mode: 'development',
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { 
            loader: 'ts-loader',
            options: {
              allowTsInNodeModules: true,
              configFile: 'tsconfig-test.json'
            }
          }
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },
}
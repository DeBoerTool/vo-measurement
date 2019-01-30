module.exports = {
  entry: './index.ts',
  
  mode: 'development',
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { 
            loader: 'babel-loader' 
          }, 
          { 
            loader: 'ts-loader',
            options: {
              allowTsInNodeModules: true
            }
          }
        ],
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}
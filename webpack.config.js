// please enter your bootstrap version here. bs = bootstrap 4, bs3 = bootstrap 3
const bs = 'bs4';

module.exports = {
  entry: ['./src/scss/' + bs + '.scss', './src/ts/main.ts'],
  watch: true,
  mode: 'none',
  output: {
    filename: 'app-bundle.min.js',
    library: 'faq',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss']
  },
  module: {
    rules: [{
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          }
        ]
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
      },
    ],
  },
};
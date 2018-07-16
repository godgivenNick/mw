const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    resolve: {
      modules: ['node_modules'],
      alias: {
        'TweenLite': 'gsap/src/minified/TweenLite.min.js',
        'TweenMax': 'gsap/src/minified/TweenMax.min.js',
        'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
        'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
        'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
        'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
      }
    },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.pug$/,
        use: [
          "html-loader",
          "pug-html-loader"
        ]
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./img/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.woff2?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      },
      {
        test: /\.txt$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'files/'
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.pug",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ]
};
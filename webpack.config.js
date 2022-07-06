const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: Path.resolve(__dirname, "build"), // this way of writing the path is to make it work with different operating systems 
    assetModuleFilename: 'images/[name][ext]'
  },
  module: {
    // }
    // plugins: [
    //   new HtmlWebpackPlugin({ template: "src/index.html" })

    // ]

    rules: [

      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader",
        ],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(), new MiniCssExtractPlugin(),
  new CssMinimizerPlugin()
  ],
  optimization: {
    minimizer: [

      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {

            plugins: [
              ["gifsicle", { interlaced: true }],
              ["mozjpeg", { quality: 80 }],
              ["optipng", { optimizationLevel: 5 }],

              [
                "svgo",
                {
                  name: 'preset-default',
                  params: {
                    overrides: {

                      convertShapeToPath: {
                        convertArcs: true
                      },

                      convertPathData: false
                    }
                  }
                }
              ],
            ],
          },
        },
      }),
    ],
  }

}
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    // Entry point resolves to app/src/js/main.js
    context: path.resolve(__dirname, "app"),
    entry: {
      bundle: "./src/js/main.js",
    },
    output: {
      path: path.resolve(__dirname, "app/dist"),
      filename: "[name].js", // -> app/dist/bundle.js
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/i,
          use: [
            // Extract compiled SCSS into a separate file (app/dist/styles.css).
            // Used in dev as well so index.html links work identically in dev and prod.
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                // Do not try to resolve url(...) references (fonts/images are not used here)
                url: false,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  // Bootstrap 5.3 sources still use @import; silence Dart Sass >= 1.80 deprecation warnings
                  silenceDeprecations: ["import"],
                  // Bootstrap sources trigger legacy-Sass deprecation warnings (global
                  // built-ins, color functions, if()); suppress warnings from dependencies
                  quietDeps: true,
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css", // -> app/dist/styles.css
      }),
    ],
    devServer: {
      // Serve app/ statically so app/index.html + app/dist/* work with relative paths
      static: {
        directory: path.resolve(__dirname, "app"),
      },
      port: 8080,
      open: true,
      hot: true,
    },
    devtool: isProduction ? false : "eval-source-map",
    performance: { hints: false },
  };
};

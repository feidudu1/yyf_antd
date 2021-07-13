const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
          localIdentName: "[name]_[local]-[hash:base64:5]",
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../src/"),
    });
    config.module.rules.push({
      test: /\.tsx?&/,
      use: [
        {
          loader: require.resolve("react-docgen-typescript-loader"),
          options: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
              if (prop.parent) {
                // 将node_modules的props过滤掉
                return !prop.parent.fileName.includes("node_modules");
              }
              return true;
            },
          },
        },
      ],
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};

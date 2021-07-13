import React from "react";
import { withInfo } from "@storybook/addon-info";

import "!style-loader!css-loader!sass-loader!../src/styles/index.scss";

const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
);

const CenterDecorator = (storyFn: any) => storyWrapper(storyFn);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  info: { inline: true, header: false },
};

export const decorators = [CenterDecorator, withInfo];

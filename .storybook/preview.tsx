import React from "react";

import "!style-loader!css-loader!sass-loader!../src/styles/index.scss";

const styles: React.CSSProperties = {
  textAlign: "center",
};

const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [CenterDecorator];

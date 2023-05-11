import type { StorybookConfig } from "@storybook/react-vite";
import { InlineConfig, mergeConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const overrideConfig: InlineConfig = {
      plugins: [tsconfigPaths({ root: "../tsconfig.json" })],
    };

    return mergeConfig(config, overrideConfig);
  },
};
export default config;

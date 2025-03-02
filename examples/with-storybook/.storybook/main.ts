import type { StorybookConfig } from "@storybook/react-vite"
import type { UserConfig } from "vite"

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../WebApp/ui/**/*.mdx",
    "../WebApp/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite")

    console.log(config)

    return mergeConfig(config, {
      base: "/WebApp/ui",
      publicDir: "WebApp/ui/public",
    } satisfies UserConfig)
  }
}
export default config

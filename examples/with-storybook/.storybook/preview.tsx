import type { Preview } from "@storybook/react"
import "../WebApp/ui/src/styles/global.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => (
      <main id="root">
        <Story />
      </main>
    )
  ]
}

export default preview

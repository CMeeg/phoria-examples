import type { Meta, StoryObj } from "@storybook/react"
import { Counter } from "./Counter"

const meta = {
  title: "Phoria/Counter",
  component: Counter,
  tags: ["autodocs"],
  argTypes: {
    startAt: { control: "number" }
  },
  decorators: [
    (Story) => (
      <div className="card">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Counter>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithStartCount: Story = {
  args: {
    startAt: 10
  }
}

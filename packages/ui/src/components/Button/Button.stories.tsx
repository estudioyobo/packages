import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export const generated: ComponentStory<typeof Button> = () => {
  return (
    <div className="grid gap-2">
      <div>
        <Button onClick={() => null}>Normal</Button>
      </div>
      <div>
        <Button onClick={() => null} disabled>
          Disabled
        </Button>
      </div>
      <div className="flex">
        <Button onClick={() => null} loading>
          Loading
        </Button>
      </div>
      <div>
        <Button onClick={() => null} size="Small">
          Small
        </Button>
      </div>
      <div>
        <Button onClick={() => null} size="Small" loading>
          Small loading
        </Button>
      </div>
      <div>
        <Button onClick={() => null} type="Ghost">
          Ghost
        </Button>
      </div>
      <div>
        <Button onClick={() => null} type="Link">
          Link
        </Button>
      </div>
      <div>
        <Button onClick={() => null} type="Warning">
          Warning
        </Button>
      </div>
    </div>
  )
}

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
)

export const Primary = Template.bind({
  onClick: () => null,
})
Primary.args = {
  type: 'Base',
}

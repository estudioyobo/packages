import { StoryFn, Meta } from '@storybook/react'

import { Button } from './Button'

export const generated: StoryFn<typeof Button> = () => {
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
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args: any) => (
  <Button {...args}>Button</Button>
)

export const Primary = Template.bind({
  onClick: () => null,
})
Primary.args = {
  type: 'Base',
}

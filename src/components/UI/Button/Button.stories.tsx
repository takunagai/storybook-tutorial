import type { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  // title: 'UI/Button', // 省略可能。サイドメニューの親グループのタイトル。ディレクトリ階層がメニューに反映される
  component: Button
} as ComponentMeta<typeof Button>

/**
 * Stories
 *   - 変数名がストーリー名となる
 *   - コンポーネントタグ内の内容は、props.children でコンポーネントに渡される
 */
export const Default: ComponentStoryObj<typeof Button> = {
  render: () => <Button>Default</Button>,
}

export const Primary: ComponentStoryObj<typeof Button> = {
  render: () => <Button color="primary">Primary</Button>,
}

export const Secondary: ComponentStoryObj<typeof Button> = {
  render: () => <Button color="secondary">Secondary</Button>,
}

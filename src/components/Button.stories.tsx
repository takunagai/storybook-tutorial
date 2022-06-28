import Button from './Button'

export default {
    title: 'Button', // サイドメニューの親グループのタイトル
    component: Button,
}

/**
 * Stories
 */
export const HelloButton = () => <Button>hello World</Button>
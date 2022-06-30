import Button from './Button'

export default {
    title: 'Button', // サイドメニューの親グループのタイトル
    // title: 'Common/Button', // ★★TODO: できない：階層にすると見出しに
    component: Button,
}

/**
 * Stories
 *   - 変数名 = ストーリー名
 *   - コンポーネントタグ内の内容は、props.children でコンポーネントに渡される
 */
export const HelloButton = () => <Button>hello World</Button>

export const LongButton = () => <Button>とても長い文字列の入ったボタンですとても長い文字列の入ったボタンです</Button>
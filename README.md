# Storybook メモ

#storybook #開発環境

## Storybook とは

* アプリケーションから切り離し独立した状態でコンポーネントの開発を行うために利用するツール

- - -

## Vite のインストール

`npm create vite@latest`
で、対話式で質問に答えていく。ライブラリのインストール、プロジェクト名の指定、使う環境(今回は react/ts)。最後に表示されるコマンドで、必要な npmインストールし起動。

## git の設定

* .gitignore を確認

## Storybook のインストール

とてもわかりやすい [ゼロから始めるStorybook入門(React編) - アールエフェクト](https://reffect.co.jp/html/storybook) に沿って進める。

`npx storybook init`
ちょっと時間長め。対話式でライブラリ群のインストールをしてくれる
また、package.json の "scripts" にコマンドを追記してくれる(デフォルトは Webサーバーのポートが6006。これだとエラーが出たという話もあるが、自分は大丈夫だった)

## Storybook の起動

`npm run storybook`
ビルドされ、Webサーバーとブラウザが立ち上がりウェルカムページが表示される

### メモ

* サイドメニューのコンポーネントの + ボタンを押し表示される Primary や Secondary が「ストーリー」
* 上部の Docs タブで、各ストーリーの属性に設定できる値やコードを見れる
* ここまでの package.json、フォルダ構成。storybook 関連のファイルが作成されている(.storybook, src/stories/*)
  ![storybook-1](https://user-images.githubusercontent.com/3456089/176324112-93bb1884-e5e4-464e-8fae-d1a6265e3eaf.png)
* storybook の設定ファイルは .storybook/main.js
  - stories で、対象ファイルの設定。今回は、components 配下で *.stories.jsx のみ自動検知できるように変更した
  - addons で、アドオンの設定。デフォルトで設定されてる "@storybook/addon-essentials" には[色んな機能](https://storybook.js.
    org/docs/react/essentials/introduction)が入っている
* 簡素な Button コンポーネントの作成
  - Button.jsx, Button.stories.jsx (コンポーネント名+.stories.jsx)、src 内なら同ディレクトリに置かなくても良い
  - ストーリーは、Component Story Format(CSF) フォーマットで記述
    - title は、サイドメニューの親グループのタイトル。★★できない？：階層にすると見出しが作れる
    - 変数名 = ストーリー名
    - コンポーネントタグ内の内容は、props.children でコンポーネントに渡される
    - 

## 参照

* [ゼロから始めるStorybook入門(React編) | アールエフェクト](https://reffect.co.jp/html/storybook)
* [storybookを理解する](https://zenn.dev/kyo9bo/articles/bd37f814b33909)
# Storybook メモ

#storybook #開発環境

## Storybook とは

* アプリケーションから切り離し独立した状態で、コンポーネントの開発を行うためのツール

- - -

## 手順

### 1. Vite のインストール

`npm create vite@latest`
で、対話式で質問に答えていく。ライブラリのインストール、プロジェクト名の指定、使う環境(今回は react/ts)。最後に表示されるコマンドで、必要な npmインストールし起動。

### 2. git の設定

* .gitignore を確認

### 3. Storybook をインストール

わかりやすい [ゼロから始めるStorybook入門(React編) - アールエフェクト](https://reffect.co.jp/html/storybook) に沿って進める。※ 
ただし、古い書き方なので、理解するために読むに止め、実装時は後述の参照先を見ること

`npx storybook init`  
対話式でライブラリ群のインストールをしてくれる。時間長め。  
package.json の "scripts" に storybook のコマンドを追記してくれる(デフォルトは Webサーバーのポートが6006。これだとエラーが出たという話もあるが、自分は大丈夫だった)

### 4. Storybook の起動

`npm run storybook`
ビルドされ、Webサーバーとブラウザが立ち上がりウェルカムページが立ち上がる

## TypeScript x  Storybook v7 (CSF3) でのストーリーの書き方

* [Component Story Format (CSF)](https://storybook.js.org/docs/7.0/react/api/csf#named-story-exports) ★★TODO: 残り読む

### Args story inputs

Args と呼ばれる名前付き入力は、Storybook とそのアドオンによって提供される（場合により更新される）動的データ

## play 関数

ストーリーがレンダリングされたタイミングで起こすアクションを記述できる関数

* [TypeScript + Storybook CSF3.0の書き方とユニットテストへの応用](https://zenn.dev/yukishinonome/articles/6bc6e33d579276) ★★TODO: 残り読む

## Jest と連携 (テスト)

* [TypeScript + Storybook CSF3.0の書き方とユニットテストへの応用](https://zenn.dev/yukishinonome/articles/6bc6e33d579276)

## メモ

* サイドメニューのコンポーネントの + ボタンを押し表示される Primary や Secondary が「ストーリー」
* 上部の Docs タブで、各ストーリーの属性に設定できる値やコードを見れる
* ここまでの package.json、フォルダ構成。storybook 関連のファイル(.storybook, src/stories/*)が作成されている
  ![storybook-1](https://user-images.githubusercontent.com/3456089/176324112-93bb1884-e5e4-464e-8fae-d1a6265e3eaf.png)
* storybook の設定ファイルは .storybook/main.js
  - stories で、対象ファイルの設定。今回は、components 配下で *.stories.tsx のみ自動検知できるように変更した
  - addons で、アドオンの設定。デフォルトで設定されてる "@storybook/addon-essentials" には[色んな機能](https://storybook.js.
    org/docs/react/essentials/introduction)が入っている
* 簡素な Button コンポーネントの作成
  - Button.tsx, Button.stories.tsx (コンポーネント名+.stories.tsx)、src 内なら同じディレクトリに置かなくても良い
  - ストーリーは、Component Story Format(CSF) フォーマットで記述
    - title は、サイドメニューの親グループのタイトル。★★できない？：階層にすると見出しが作れる
    - 変数名 = ストーリー名
    - コンポーネントタグ内の内容は、props.children でコンポーネントに渡される
    - 

## 参照

* [ゼロから始めるStorybook入門(React編) | アールエフェクト](https://reffect.co.jp/html/storybook)
* [storybookを理解する](https://zenn.dev/kyo9bo/articles/bd37f814b33909)
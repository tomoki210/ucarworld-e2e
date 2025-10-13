## 使い方

### 環境構築

```shell
npm i
cp -p .env.example .env
```

.envファイルを編集し、各種環境変数を設定してください。

### 実行方法

#### 全件実行

※複数ブラウザで走り、Inquiryを複数実施するので

```shell
npx playwright test
```

#### UI実行

基本こちらから個別実行がやりやすい

```shell
npx playwright test --ui
```

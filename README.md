# React CRUD Sample

React + TypeScriptで、ユーザーの登録・一覧・編集・削除を確認できるサンプルです。

## 使用技術

- Vite
- React / TypeScript
- Ant Design
- AG Grid Community
- React Hook Form
- Zod
- Storybook

## セットアップ

```cmd
npm install
```

## アプリを起動

```cmd
npm run dev
```

通常は `http://localhost:5173` で開きます。

## Storybookを起動

```cmd
npm run storybook
```

通常は `http://localhost:6006` で開きます。

Storybookの `Users/UserManagement/CrudDemo` で、登録・編集・削除を一通り確認できます。

## ビルド確認

```cmd
npm run build
npm run build-storybook
```

## コンポーネント構成

```text
src/
├─ components/
│  ├─ UserDeleteButton/  削除確認UI
│  ├─ UserForm/          登録・編集フォーム
│  ├─ UserTable/         AG Gridによる一覧
│  └─ UserManagement/    CRUDの状態管理と画面構成
├─ data/                 Storybook・初期表示用データ
├─ schemas/              Zodスキーマ
└─ types/                型定義
```

`UserManagement`がユーザー一覧と編集中ユーザーを管理し、UI単位の子コンポーネントへ値と処理を渡しています。

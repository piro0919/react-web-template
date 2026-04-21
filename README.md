# react-web-template

> React site layout template with configurable header/footer/navigation slots.

[🔗 npm](https://www.npmjs.com/package/react-web-template)

## 📦 Install

```bash
npm install react-web-template
```

## 🚀 Usage

```tsx
import ReactWebTemplate from "react-web-template";

function App() {
  return (
    <ReactWebTemplate
      header={<MyHeader />}
      footer={<MyFooter />}
      leftNav={<MyLeftNav />}
      rightNav={<MyRightNav />}
    >
      <MainContent />
    </ReactWebTemplate>
  );
}
```

## ⚙️ Props

| Prop               | Type        | Description               |
| ------------------ | ----------- | ------------------------- |
| children           | ReactNode   | Main content              |
| header / footer    | ReactNode   | Header / footer sections  |
| leftNav / rightNav | ReactNode   | Left / right sidebars     |
| className          | string      | Applied to the root       |
| *ClassName         | string      | Per-slot class names      |

## 📌 Status

This package targets React class components and is no longer under active development.

## 📄 License

MIT

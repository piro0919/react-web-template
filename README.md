# react-web-template

> Tiny, headless layout primitive for React with header/footer/sidebar slots.

[![npm](https://img.shields.io/npm/v/react-web-template.svg)](https://www.npmjs.com/package/react-web-template)
[![license](https://img.shields.io/npm/l/react-web-template.svg)](./LICENSE)

A small CSS Grid–based "holy-grail" layout component. Optional header, footer, left/right sidebars. Default inline styles get you working immediately; `unstyled` flips them off when you want full CSS control.

🌐 **Demo:** <https://react-web-template.kkweb.io>

## Install

```bash
npm install react-web-template
```

Requires React 18 or 19.

## Usage

```tsx
import { WebTemplate } from "react-web-template";

export function App() {
  return (
    <WebTemplate header={<Header />} footer={<Footer />} leftNav={<Sidebar />}>
      <Article />
    </WebTemplate>
  );
}
```

## API

| Prop         | Type        | Default | Description                          |
| ------------ | ----------- | ------- | ------------------------------------ |
| `children`   | `ReactNode` | —       | Main content (rendered in `<main>`). |
| `header`     | `ReactNode` | —       | Header slot.                         |
| `footer`     | `ReactNode` | —       | Footer slot.                         |
| `leftNav`    | `ReactNode` | —       | Left sidebar slot.                   |
| `rightNav`   | `ReactNode` | —       | Right sidebar slot.                  |
| `className`  | `string`    | —       | Class on the root.                   |
| `*ClassName` | `string`    | —       | Class on the respective slot.        |
| `style`      | `CSSProps`  | —       | Inline style merged into root.       |
| `unstyled`   | `boolean`   | `false` | Disable default Grid styles.         |

Root element exposes `data-has-header` / `data-has-footer` / `data-has-left-nav` / `data-has-right-nav` based on slot presence.

## License

MIT

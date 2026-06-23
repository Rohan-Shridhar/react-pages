# react-pages

<img src="https://img.shields.io/npm/d18m/@rohansm14/react-pages" />

A lightweight React component library for common utility pages.
---

<img width="1920" height="1080" alt="Screenshot 2026-06-13 181715" src="https://github.com/user-attachments/assets/d1d5c3a5-3578-46aa-b32a-242fac07a239" />


---

## Installation

```bash
npm install @rohansm14/react-pages
```

> **Peer dependencies:** Make sure you have `react` and `react-dom` installed in your project.

---

## Getting Started

Import the component you need and drop it into your app.


### `<LostPage404 />`

A plug-and-play 404 page with sensible defaults. Every aspect is customizable via props.

#### Basic Usage

```jsx
import { LostPage404 } from "@rohansm14/react-pages";

<LostPage404 />
```

#### With Custom Props

```jsx
<LostPage404
  bgcolor="#0f0f0f"
  color="#ffffff"
  title="Oops! Wrong Turn"
  message="The page you're looking for has vanished into the void."
  homelink="/home"
  buttonmessage="Take me home"
  buttonbgcolor="#6366f1"
  buttoncolor="#ffffff"
  scaleonhover={true}
/>
```


### `<Forbidden403 />`

A plug-and-play 403 page with sensible defaults. Every aspect is customizable via props.

#### Basic Usage

```jsx
import { Forbidden403 } from "@rohansm14/react-pages";

<Forbidden403 />
```

#### With Custom Props

```jsx
<Forbidden403
  bgcolor="#0f0f0f"
  color="#ffffff"
  title="Oops! Wrong Turn"
  message="The page you're looking for has vanished into the void."
  homelink="/home"
  buttonmessage="Take me home"
  buttonbgcolor="#6366f1"
  buttoncolor="#ffffff"
  scaleonhover={true}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `bgcolor` | `string` | `"#ffffff"` | Background color of the page |
| `color` | `string` | `"#000000"` | Text color |
| `scaleonhover` | `bool` | `false` | Enables a scale + translate animation on the 404 heading on hover |
| `codesize` | `string` | `"4rem"` | Font size of the `404` code |
| `title` | `string` | `"Page Not Found"` | Heading below the error code |
| `titlesize` | `string` | `"2rem"` | Font size of the title |
| `message` | `string` | `"Sorry, the page you are looking for does not exist"` | Subtext below the title |
| `messagesize` | `string` | `"1rem"` | Font size of the message |
| `homelink` | `string` | `"/"` | URL the button navigates to |
| `buttonmessage` | `string` | `"Go back Home"` | Label on the button |
| `buttonbgcolor` | `string` | `"#000000"` | Background color of the button |
| `buttoncolor` | `string` | `"#ffffff"` | Text color of the button |
| `buttonsize` | `string` | `"1rem"` | Font size of the button text |

---

## Contributing

Contributions are welcome! Please read the [Contributing Guide](./CONTRIBUTING.md) before submitting a PR.

---

## License

[MIT](./LICENSE) © Rohan S Mirjankar

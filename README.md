# WebComp UI CLI

A lightweight CLI tool to install and manage Web Components from the [webcomp-ui library](https://github.com/marceloxhenrique/webcomp-ui).  
It helps you add individual components to your project and set up framework specific configurations,
making it easy to integrate these components with popular frontend frameworks such as React, Angular, and Vue.

---

## Features

- Add Web Components to your project in one command
- Auto configures framework specific JSX/TSX types (for React TypeScript)
- Creates necessary folder structure and import scaffolding
- Pulls components directly from the remote GitHub repository
- Framework aware setup

---

## Installation

You can use the CLI without installing it globally:

```bash
npx webcomp-ui-cli
```

Or install globally:

```bash
npm install -g webcomp-ui-cli
```

---

## Usage

### 1. Initialize your project with framework selection

```bash
npx webcomp-ui-cli
```

You'll see an interactive prompt to select your framework:

```
Select a framework:
> React JavaScript
  React TypeScript
  Angular
  Vue
```

After selection, a `.webcomp-ui.json` config file and the `src/webcomp/ui.ts` scaffold are generated.

### 2. Add a Web Component

```bash
npx webcomp-ui-cli add button
```

- Downloads the `button` component from the GitHub repository
- Adds it to `src/webcomp/button.ts`
- Auto imports it in `src/webcomp/ui.ts`
- Injects React JSX type definitions (if applicable)

### 3. Import the component

Just import the `ui.ts` file wherever you bootstrap your app, and all registered components will then be available across your entire application.

```javascript
import "./webcomp/ui";
```

### 4. Use the Web Component.

> _"Use the Web Component in your code as you would use any HTML element."_

```html
<w-button variant="secondary" onclick="handleClick">Button</w-button>
```

---

## Supported Components

| Component | Tag             | Attributes                                                                                                                                                                                      |
| --------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accordion | `<w-accordion>` | `header="Section 1"`(used on slotted items as a label)                                                                                                                                          |
| Button    | `<w-button>`    | `variant="default / outline / secondary / danger"`<br>`width="200px"`                                                                                                                           |
| Card      | `<w-card>`      | `card-title="My Card Title"`<br>`card-title-color="#303131"`<br>`card-content="Lorem ipsum dolor sit amet"`<br>`card-content-color="#303131"`<br>`card-img-src="https://example.com/image.jpg"` |
| Input     | `<w-input>`     | `input-label="Username"`<br>`input-placeholder="Enter your username"`<br>`input-width="25rem"`                                                                                                  |
| Spinner   | `<w-spinner>`   | (no attributes)                                                                                                                                                                                 |
| Textarea  | `<w-textarea>`  | `input-label="Description"`<br>`input-placeholder="Write something..."`<br>`input-width="25rem"`<br>`rows="4"`                                                                                  |
| Tooltip   | `<w-tooltip>`   | `position="top / right / bottom / left"`                                                                                                                                                        |

> More components coming soon!

---

## For React (TypeScript)

If you selected **React TypeScript**:

- JSX support is added automatically
- The `ui.ts` file declares custom `JSX.IntrinsicElements` so that your components work out of the box with full IntelliSense

---

## Project Structure

After using the CLI, your project will have:

```
src/
└── webcomp/
    ├── ui.ts               # Entry point for all web components
    ├── button.ts           # Example: dynamically added component
.webcomp-ui.json            # Framework config
```

---

## CLI Commands

```bash
webcomp-ui-cli             # Launch framework selection UI
webcomp-ui-cli add <name>  # Add a component
```

---

## Remote Component Source

Components are fetched from:

```
https://github.com/marceloxhenrique/webcomp-ui/tree/main/src/components/
```

---

## License

MIT License built by [@marceloxhenrique](https://github.com/marceloxhenrique)

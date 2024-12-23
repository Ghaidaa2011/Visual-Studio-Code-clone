import { v1 as uuid } from "uuid";
import { IFile } from "../interfaces";

export const FileTree: IFile = {
  id: uuid(),
  name: "VS code clone",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: ".vite",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "react.tsx",
              isFolder: false,
              content: `const react = () => {
  return (
    <div>react</div>
  )
}
export default react`,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              isFolder: false,
              name: "Button.tsx",
              content: `const Button = () => {
  return (
    <div>Button</div>
  )
}
export default Button`,
            },
            {
              id: uuid(),
              isFolder: false,
              name: "dummy.hhh",
              content: `it is dummy data`,
            },
          ],
        },
      ],
    },
    {
      id: uuid(),
      name: "index.html",
      isFolder: false,
      content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
    },
    {
      id: uuid(),
      name: "constants",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.ts",
          isFolder: false,
          content: `export const extentionIconPaths: Record<string, string> = {
  // Files
  js: "/icons/javascript",
  ts: "/icons/typescript",
  tsx: "/icons/react_ts",
  jsx: "/icons/react",
  html: "/icons/html",
  svg: "/icons/svg",
  gitignore: "/icons/git",
  json: "/icons/nodejs",

  //Folders
  node_modules: "/icons/folder-node",
  src: "/icons/folder-src",
  public: "/icons/folder-public",
  components: "/icons/folder-components",
  images: "/icons/folder-images",
  constants: "/icons/folder-constant",
};`,
        },
      ],
    },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        { id: uuid(), name: "images", isFolder: true },
        {
          id: uuid(),
          name: "vscode.svg",
          isFolder: false,
          content: `<svg xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" `,
        },
      ],
    },
    {
      id: uuid(),
      name: ".gitignore",
      isFolder: false,
      content: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local`,
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
      content: `{
    "name": "react-ts-alert-project",
    "private": true,
    "version": "0.0.0",
    "type": "module",
    "scripts": {
      "dev": "vite",
      "build": "tsc && vite build",
      "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
      "preview": "vite preview"
    },
    "dependencies": {
      "@reduxjs/toolkit": "^1.9.5",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-redux": "^8.1.2",
      "react-resizable-panels": "^0.0.54",
      "react-syntax-highlighter": "^15.5.0",
      "uuid": "^9.0.0"
    }
}`,
    },
  ],
};

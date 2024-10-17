import { IFile } from "../interfaces";

export const FileTree: IFile = {
  name: "VS code clone",
  isFolder: true,
  children: [
    {
      name: "node_modules",
      isFolder: true,
      children: [
        {
          name: ".vite",
          isFolder: true,
          children: [
            { name: "react.tsx", isFolder: false },
            { name: "react.jsx", isFolder: false },
          ],
        },
      ],
    },
    {
      name: "src",
      isFolder: true,
      children: [
        {
          name: "components",
          isFolder: true,
          children: [
            { isFolder: false, name: "Button.tsx" },
            { isFolder: false, name: "dummy.hhh" },
          ],
        },
      ],
    },
    { name: "index.html", isFolder: false },
    {
      name: "public",
      isFolder: true,
      children: [
        { name: "images", isFolder: true },
        { name: "vscode.svg", isFolder: false },
      ],
    },
  ],
};

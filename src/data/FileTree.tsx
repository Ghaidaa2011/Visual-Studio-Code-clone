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
            { id: uuid(), name: "react.tsx", isFolder: false },
            { id: uuid(), name: "react.jsx", isFolder: false },
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
            { id: uuid(), isFolder: false, name: "Button.tsx" },
            { id: uuid(), isFolder: false, name: "dummy.hhh" },
          ],
        },
      ],
    },
    { id: uuid(), name: "index.html", isFolder: false },
    {
      id: uuid(),
      name: "public",
      isFolder: true,
      children: [
        { id: uuid(), name: "images", isFolder: true },
        { id: uuid(), name: "vscode.svg", isFolder: false },
      ],
    },
  ],
};

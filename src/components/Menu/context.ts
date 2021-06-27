import { createContext } from "react";

export type TSelectCallback = (selectedIndex: number) => void;
export type TMode = "vertical" | "horizontal";

export interface IMenuContext {
  index: number;
  onSelect?: TSelectCallback;
  mode?: TMode;
  defaultOpenIndex?: number[];
}

const MenuContext = createContext<IMenuContext>({
  index: 0,
});

export default MenuContext;

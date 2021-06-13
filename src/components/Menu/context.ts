import { createContext } from "react";

export type TSelectCallback = (selectedIndex: number) => void;

export interface IMenuContext {
  index: number;
  onSelect?: TSelectCallback;
}

const MenuContext = createContext<IMenuContext>({
  index: 0,
});

export default MenuContext;

import { FC } from "react";
import Menu, { IMenuProps } from "./menu";
import SubMenu, { ISubMenuProps } from "./subMenu";
import MenuItem, { IMenuItemProps } from "./menuItem";

export type IMenuComponent = FC<IMenuProps> & {
  // yyfkey:// 符合组件的写法
  Item: FC<IMenuItemProps>;
  SubMenu: FC<ISubMenuProps>;
};

const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;

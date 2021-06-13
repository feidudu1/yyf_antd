import React, { useContext, useState } from "react";
import classNames from "classnames";
import MenuContext from "./context";
import { IMenuItemProps } from "./menuItem";

export interface ISubMenuProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.FC<ISubMenuProps> = ({
  index,
  title,
  className,
  children,
}) => {
  const context = useContext(MenuContext);
  const [menuOpen, setOpen] = useState(false);
  const classes = classNames(
    "menu-item",
    "submenu-item",
    {
      "is-active": context.index === index,
    },
    className
  );

  const handleClick = (e: React.MouseEvent) => {
    setOpen(!menuOpen);
  };

  let timer: any;
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(toggle);
    }, 300);
  };

  const clickEvents =
    context.mode === "vertical" ? { onClick: handleClick } : {};
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {};

  const renderChildren = () => {
    const subMenuClasses = classNames("submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>;
      if (childElement.type.displayName === "MenuItem") {
        return React.cloneElement(childElement, { index });
      } else {
        console.error(
          "Warning: subMenu has a child whitch is not a MenuItem Component"
        );
      }
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...clickEvents} {...hoverEvents}>
      <div className={"submenu-title"}>{title}</div>
      {renderChildren()}
    </li>
  );
};

SubMenu.displayName = "SubMenu";
export default SubMenu;

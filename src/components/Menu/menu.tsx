import React, { useState } from "react";
import classNames from "classnames";
import MenuContext, { TSelectCallback, IMenuContext } from "./context";
import { IMenuItemProps } from "./menuItem";

type TMode = "vertical" | "horizontal";

export interface IMenuProps {
  defaultIndex?: number;
  mode?: TMode;
  className?: string;
  onSelect?: TSelectCallback;
  style?: React.CSSProperties;
}

const Menu: React.FC<IMenuProps> = (props) => {
  const { children, defaultIndex, mode, onSelect, className, style } = props;

  const classes = classNames("menu", className, {
    vertical: mode === "vertical",
  });

  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleClick = (index: number) => {
    setActiveIndex(index);
    if (onSelect) {
      onSelect(index);
    }
  };

  const passedContext: IMenuContext = {
    index: activeIndex || 0,
    onSelect: handleClick,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<IMenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem") {
        return React.cloneElement(childElement, { index });
      } else {
        console.error(
          "Warning: menu has a child whitch is not a MenuItem Component"
        );
      }
    });
  };

  return (
    <ul style={style} className={classes}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;

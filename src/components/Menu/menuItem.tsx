import React, { useContext } from "react";
import classNames from "classnames";
import MenuContext from "./context";

export interface IMenuItemProps {
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  index: number;
}

const MenuItem: React.FC<IMenuItemProps> = (props) => {
  const { disabled, className, style, index, children } = props;

  const context = useContext(MenuContext);

  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index);
    }
  };

  return (
    <li key={index} className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  disabled: false,
};

export default MenuItem;

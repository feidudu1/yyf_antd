import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
function App() {
  return (
    <div className="App">
      <div title={"menu_test"}>
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            console.log("select " + index);
          }}
        >
          <MenuItem index={0}>hi</MenuItem>
          <MenuItem index={1}>feifei</MenuItem>
        </Menu>
      </div>
      <div title={"button_test"}>
        <Button disabled>hello</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} autoFocus>
          hello
        </Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
          hello
        </Button>
      </div>
    </div>
  );
}

export default App;

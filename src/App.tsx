import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Icon from "./components/Icon/icon";
import Transition from "./components/Transition/transition";

library.add(fas);

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Icon icon="coffee" size="10x" theme="primary" />
      <div title={"menu_test"}>
        <Menu
          defaultIndex={0}
          onSelect={(index) => {
            console.log("select " + index);
          }}
          // mode={"vertical"}
          defaultOpenIndex={[2]}
        >
          <MenuItem>hi</MenuItem>
          <MenuItem>feifei</MenuItem>
          <SubMenu title={"submenu demo"}>
            <MenuItem> sub hi</MenuItem>
            <MenuItem>sub feifei</MenuItem>
          </SubMenu>
        </Menu>
      </div>
      <Button size="lg" onClick={() => setShow(!show)}>
        toggle
      </Button>
      <Transition in={show} timeout={300} animation="zoom-in-left">
        <div title={"button_test"}>
          <Button disabled>hello</Button>
          <Button btnType="primary" size="lg" autoFocus>
            hello
          </Button>
          <Button btnType="link" href="http://www.baidu.com" disabled>
            hello
          </Button>
        </div>
      </Transition>
    </div>
  );
}

export default App;

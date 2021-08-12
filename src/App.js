import "./App.css";
import { useState } from "react";
import { Logo } from "./icons/logo";
import { ItemMenu } from "./components/itemsMenu";
import { menuItems } from "./datas/datas";

import { ElectronicsScreen } from "./screens/electronics";
import useWindowDimensions from "./components/dimensions";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { width, heigth } = useWindowDimensions();
  return (
    <div className="web-style">
      <div
        className={
          width < 1082
            ? menuIsOpen
              ? "rectangle-style mobile-style"
              : "d-none"
            : "rectangle-style"
        }
      >
        <Logo />

        <div className="row-select">
          <select className="select-style" name="cars" id="cars">
            <option value="fa-home">&#xf015; Dashboard </option>
            <option value="fa-genderless">&#xf22d; eCommerce</option>
          </select>
        </div>

        {menuItems.map((item) => (
          <>
            <p className="title-menu-rectangle">{item.title}</p>
            <div className="menu-items">
              {item.datas.map((item) => (
                <ItemMenu
                  isMenuExpanded={item.isMenuExpanded}
                  onClick={()=>setMenuIsOpen(false)}
                  isOriginal={item.isOriginal}
                  icon={item.icon}
                  text={item.text}
                />
              ))}
            </div>
          </>
        ))}
      </div>

      <ElectronicsScreen
        setMenuIsOpen={setMenuIsOpen}
        menuIsOpen={menuIsOpen}
      />
    </div>
  );
}

export default App;

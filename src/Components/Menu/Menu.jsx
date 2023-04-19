import React from "react";
import MenuItem from "../MenuItems/MenuItem";
import "./Menu.css";
import { RxCross1 } from "react-icons/rx";

const DesktopView = ({ menuItems }) => {
  // console.log(menuItems);
  return (
    <div className="desktopMenu">
      {menuItems.map((item, index) => {
        return <MenuItem key={index} reference={item.ref} title={item.title} />;
      })}
    </div>
  );
};

const MobileView = ({ setShowMenu, mobItems }) => {
  return (
    <div className="menuListMobile">
      <div className="closeButton" onClick={() => setShowMenu(false)}>
        <RxCross1 />
      </div>
      {mobItems.map((item, index) => {
        return <MenuItem key={index} reference={item.ref} title={item.title} />;
      })}
    </div>
  );
};

export { DesktopView, MobileView };
// export { DesktopView };

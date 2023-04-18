import React from "react";
import MenuItem from "../MenuItems/MenuItem";
import Style from "./Menu.css";

const DesktopView = ({ menuItems }) => {
  console.log(menuItems);
  return (
    <div className={Style.menuList}>
      {menuItems.map((item, index) => {
        return <MenuItem key={index} reference={item.ref} title={item.title} />;
      })}
    </div>
  );
};

// const MobileView = ({ setShowMenu, items }) => {
//   return (
//     <div className={Style.menuListMobile}>
//       <div className={Style.closeButton} onClick={() => setShowMenu(false)}>
//         {/* <RxCross1 /> */}
//       </div>
//       {Object.keys(items).map((item, index) => {
//         return (
//           <MenuItem
//             key={index}
//             menuItem={item}
//             reference={items[item]}
//             setShowMenu={setShowMenu}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export { DesktopView, MobileView };
export { DesktopView };

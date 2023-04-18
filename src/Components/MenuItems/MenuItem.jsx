import React from "react";
import Style from "./MenuItem.css";

const MenuItem = ({ title, reference, setShowMenu }) => {
  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  console.log(reference);
  return (
    <div
      className={Style.none}
      onClick={() => {
        scrollToRef(reference);
        // setShowMenu(false);
      }}
    >
      {title}
    </div>
  );
};

export default MenuItem;

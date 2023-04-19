import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, reference, setShowMenu }) => {
  const scrollToRef = (ref) =>
    window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });

  console.log(reference);
  return (
    <div
      className="menuItem"
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

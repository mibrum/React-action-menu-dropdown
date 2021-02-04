import React, { useRef } from "react";
import { createPopper } from "@popperjs/core";
import useToggle from "../hooks/useToggle";
import "./ActionMenu.scss";

const ActionButton = ({ data, popperConfig, icon }) => {
  const [visible, handler, triggerRef] = useToggle();
  const menuRef = useRef(null);

  createPopper(triggerRef.current, menuRef.current, popperConfig);

  const renderItems = (items) => {
    return items.menu.map((item) => {
      return (
        <li key={item.id} className="item">
          <span>{item.value}</span>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <button ref={triggerRef} onClick={handler} className="button">
        {icon}
      </button>
      <nav
        ref={menuRef}
        className="menu-item"
        style={{ display: visible ? "block" : "none" }}
      >
        <ul>{renderItems(data)}</ul>
      </nav>
    </React.Fragment>
  );
};

export default ActionButton;

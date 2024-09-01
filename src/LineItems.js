import React from "react";
import { RxCross2 } from "react-icons/rx";
const LineItems = ({ item, handleClick, removeClick }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleClick(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleClick(item.id)}
      >
        {item.item}
      </label>

      <RxCross2
        role="button"
        tabIndex="0"
        onClick={() => removeClick(item.id)}
      />
    </li>
  );
};

export default LineItems;

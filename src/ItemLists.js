import React from "react";
import LineItems from "./LineItems";

const ItemLists = ({ items, handleClick, removeClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItems
          item={item}
          key={item.id}
          handleClick={handleClick}
          removeClick={removeClick}
        />
      ))}
    </ul>
  );
};

export default ItemLists;

import React from "react";
import ItemLists from "./ItemLists";

function Content({ items, handleClick, removeClick }) {
  return (
    <>
      {items.length ? (
        <ItemLists
          items={items}
          handleClick={handleClick}
          removeClick={removeClick}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>list is empty :)</p>
      )}
    </>
  );
}

export default Content;

import React from "react";
import { useRef } from "react";

const AddItem = ({ newItem, setNewItem, handleAdd }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleAdd}>
      <label>AddItem</label>
      <input
        autoFocus
        type="text"
        placeholder="add"
        ref={inputRef} //need to pass here
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      ></input>
      <button type="submit" onClick={() => inputRef.current.focus()}>
        +
      </button>
    </form>
  );
};

export default AddItem;

import React from "react";

const InputArea = ({ change, click, data }) => {
  return (
    <div>
      <input onChange={change} placeholder="add items.." value={data} />
      <button onClick={click}>Add</button>
    </div>
  );
};

export default InputArea;
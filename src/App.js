import "./styles.css";
import { useState } from "react";
import InputArea from "./InputArea";

function App() {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);
  function changeHandler(event) {
    setInput(event.target.value);
  }
  function clickHandler() {
    setItem((prevItems) => {
      return [...prevItems, input];
    });
    setInput("");
  }
  return (
    <div className="App">
      <h1>To Do List App</h1>
      <InputArea change={changeHandler} click={clickHandler} data={input} />

      <div className="items">
        {item.map((i, index) => (
          <li>{i}</li>
        ))}
      </div>
    </div>
  );
}

export default App;

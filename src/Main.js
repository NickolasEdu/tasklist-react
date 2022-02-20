import styled from "styled-components";
import { useState } from "react";

const StyleDefault = styled.div`
  margin: auto;
  max-width: 900px;
`


const Main = () => {

  const [ task, setTask] = useState("")

  function handleChange(e) {
    let inputTask = e.target.value
    setTask(inputTask)
  }  

  return (
    <StyleDefault>
      <h1>Hello World</h1>
      <form>
        <input onChange={handleChange} placeholder="Type a new task" type="text"></input>
        <button>Add</button>
        
        <ul>
          <li>{task}</li>
        </ul>
      </form>
    </StyleDefault>
  );
}

export default Main
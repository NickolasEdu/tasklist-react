import styled from "styled-components";
import { useState } from "react";

const StyleDefault = styled.div`
  margin: auto;
  max-width: 900px;
`


const Main = () => {

  const [ task, setTask] = useState("")
  const [ items, setItems] = useState([])

  function handleChange(e) {
    let inputTask = e.target.value
    setTask(inputTask)
  }  

  function addItem(e) {
    e.preventDefault()
    
    if (task !== "") {
      setItems([...items, task])
      setTask("")
    }
  }

  return (
    <StyleDefault>
      <h1>Hello World</h1>
      <form>
        <input onChange={handleChange} placeholder="Type a new task" type="text" value={task}></input>
        <button onClick={addItem}>Add</button>
        
        <ul>
          {items.map(item => <li>{item}</li>)}
        </ul>
      </form>
    </StyleDefault>
  );
}

export default Main
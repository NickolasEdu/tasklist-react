import styled from "styled-components";

const StyleDefault = styled.div`
  margin: auto;
  max-width: 900px;
`


const Main = () => {

  return (
    <StyleDefault>
      <h1>Hello World</h1>
      <form>
        <input type="text"></input>
        <button>Add</button>
        
        <ul>
          <li>Item 1</li>
        </ul>
      </form>
    </StyleDefault>
  );
}

export default Main
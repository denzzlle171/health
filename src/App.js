import './App.css';
import styled from 'styled-components';

const AppWrapper = styled.div`
width: 100%;
height: 100vh;
color: red;
background-color: green;
`;

function App() {

  return (
    <AppWrapper className="App">
     hello I am here
    </AppWrapper>
  );
}

export default App;

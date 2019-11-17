import React from 'react';
import './App.css';
import styled from 'styled-components';
import { CreateTodo } from './containers/CreateTodo';

const Container = styled.div`
  display:flex;
  margin-top: 20%;
  align-items: center;
  justify-content: center;
`

const App = () => {

  return (
    <div className="App">

      <Container>
        <CreateTodo />
      </Container>
    </div>
  );

}

export default App;

import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

import Header from './components/common/Header';
import Nav from './components/common/Nav';

import Commands from './components/commands/Commands';

const App = () => (
  <Provider store={store}>
  <Router>
    <Container>
      <Header />
      <Main>
        <Nav />
        <Route exact path="/commands" component={Commands}/>
      </Main>
      <Footer />
    </Container>
  </Router>
  </Provider>
);


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;


const Main = styled.div`
  min-height: calc(100vh - 70px);
    width: 100vw;
  display: flex;

  background: #e0e0e0b8;
`;


const Footer = styled.div`
  height: 200px;
  width: 100vw;
  display: flex;

  box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.54);   
  background: #bda5a5;

`;
export default App;
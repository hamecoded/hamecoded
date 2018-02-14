import React, {Component} from 'react';
import styled from 'styled-components';

export default class Header extends Component {
    render() {
        return (
            <Container>
              <Logo>Oded</Logo>
              {/*<Search />*/}
            </Container>
        );
    }
}

const Container = styled.div`
  height: 70px;
  width: 100vw;
  padding: 0 100px;
  display: flex;
  align-items: center;

  justify-content: space-between;  
  box-shadow: 0px 2px 12px -1px rgba(0,0,0,0.54);   

`;

const Logo = styled.div`
  font-size: 40px;
  color: black;
  position: relative;
  display: flex;
  &:before {
    content: '';
    width: 60px;
    height: 60px;
    background: url(/assets/img/oded-small.jpeg) no-repeat;
     background-clip: content-box;
    border-radius: 50%;
    position: absolute;
    left: -64px;
    top: -5px;
    background-size: 100% 100%;
  }
`



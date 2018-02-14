import React, {Component} from 'react';
import styled from 'styled-components';

export default class Nav extends Component {
    render() {
        return (
            <Container>
              <i class="fas fa-terminal"></i>
            </Container>
        );
    }
}

const Container = styled.div`
  flex: 0 0 100px;
  background: black;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  
  i {
    font-size: 40px;
    color: white;
    cursor: pointer;
    
    &:hover{
     color: #f5f2f2;
    }
  }
`;

import React, {Component} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <Container>

              <NavLink
                to="/commands"
                style={{ color: "white", ":hover": { background: "#f5f2f2" } }}
                activeStyle={{
                  color: 'orange'
                }}
              ><i className="fas fa-terminal" title="commands"></i></NavLink>
            </Container>
        );
    }
}

const Container = styled.div`
  flex: 0 0 100px;
  background: black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 0;
  flex-direction: column;
  font-size: 40px;
  
`;

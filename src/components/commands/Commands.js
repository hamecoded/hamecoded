import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Command from './Command';
import Spinner from './Spinner';


import {fetchCommands} from "../../redux/actions/commandActions";

class Commands extends React.Component {
  emptyState = () => (
    <Empty>
      you don't have any items yet
      <Spinner/>
    </Empty>
  );

  render() {
    const {commands} = this.props;

    return (
      <Container>
        {
          commands.length ?
            commands.map( (props) => (
              <Command
                key={`tag-${props.id}`}
                {...props}
              /> )) : this.emptyState()
        }
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  commands: state.commands
});

const mapDispatchToProps = {
  fetchCommands
};

export default connect(mapStateToProps, mapDispatchToProps)(Commands);

const Container = styled.div`
    width: 100%;
    padding: 20px 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;

`;


const Empty = styled.div`
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  font-size: 14px;
  color: #888;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
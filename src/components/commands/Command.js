import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/styles/hljs';

const Code = (codeString) => {
  return <SyntaxHighlighter language='javascript' style={dark}>{codeString}</SyntaxHighlighter>;
};

export default class Command extends React.Component {
  toggleOutput = () => {

  };

  render() {
    const { snippet, description, output, tags} = this.props;
    return (
      <Container>
        <Tags>{tags.map((val) => (
          <Tag key={`tag-${val}`}>{val}</Tag>
        ))}</Tags>
        <Snippet>
          {Code(snippet)}
          <i className="fas fa-angle-double-down" onClick={this.toggleOutput} />
        </Snippet>
        <Description>{description}</Description>
        <Output>
          {Code(output)}
        </Output>
      </Container>
    );
  }
}


const Container = styled.div`
    width: 100%;
    padding: 4px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;

`;


const Snippet = styled.div`
    width: 100%;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    pre {
        width: calc(100% - 30px);
    }
    i {
       width: 30px;
       height: 20px;
       font-size: 20px;
       display: flex;
       justify-content: flex-end;
       cursor: pointer;
    }
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;


const Tag = styled.div`
    background: aqua;
    border-radius: 4px;
    padding: 2px 4px;
    margin-right: 4px;
`;


const Description = styled.div`
    width: 100%;
    
`;

const Output = styled.div`
    width: 100%;
    
`;

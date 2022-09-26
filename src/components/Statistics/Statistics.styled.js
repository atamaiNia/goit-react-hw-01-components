import styled from 'styled-components';

export const Section = styled.section`
  max-width: 750px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  box-shadow: 0 0 4px 4px rgb(143 142 145 / 50%);
  border-radius: 10px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
  width: calc(100% / 5);
  :first-child {
    background-color: lightskyblue;
    border-bottom-left-radius: 10px;
  }

  :nth-child(2) {
    background-color: #fc83c7;
  }

  :nth-child(3) {
    background-color: yellow;
  }

  :nth-child(4) {
    background-color: tomato;
  }

  :last-child {
    background-color: lawngreen;
    border-bottom-right-radius: 10px;
  }
`;

export const Label = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Value = styled.span`
  font-size: 24px;
  font-weight: 700;
`;

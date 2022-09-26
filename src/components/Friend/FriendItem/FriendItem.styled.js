import styled from 'styled-components';

export const Item = styled.li`
  padding: 10px 20px;
  align-items: center;
  display: flex;
  max-width: 200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  box-shadow: 0 0 4px 4px rgb(143 142 145 / 50%);
  border-radius: 10px;
  gap: 10px;
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0px;
  }
`;

export const IconStatus = styled.span`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${p => (p.status ? 'green' : 'red')};
`;

export const Img = styled.img`
  border-radius: 5px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

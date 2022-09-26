import styled from 'styled-components';

export const Table = styled.table`
  background-color: #fff;
  color: #fff;
  max-width: 450px;
  text-align: center;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const Head = styled.thead`
  background-color: cornflowerblue;
`;

export const HeadRow = styled.tr`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 18px;
`;

export const HeadCell = styled.th`
  height: 40px;
`;

export const TableBody = styled.tbody`
  color: grey;
`;

export const TableRow = styled.tr`
  height: 30px;
  :nth-child(2n) {
    background-color: lightskyblue;
  }
`;

export const TableCell = styled.td`
  text-transform: capitalize;
`;

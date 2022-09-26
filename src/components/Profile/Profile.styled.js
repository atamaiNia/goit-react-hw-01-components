import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  max-width: 350px;
  width: 100%;
  padding-top: 20px;
  border-radius: 5px;
  box-shadow: 0 0 4px 4px rgb(143 142 145 / 50%);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  height: 200px;
  width: 200px;
  border: 1px solid grey;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
`;
export const Location = styled.p`
  margin-bottom: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  background-color: darkgrey;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  border: 1px solid grey;
  border-bottom: 0px;
  padding: 10px;
`;

export const StatsLabel = styled.span`
  margin-bottom: 10px;
`;

export const StatsValue = styled.span`
  font-weight: 700;
`;

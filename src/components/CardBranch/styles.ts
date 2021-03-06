import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background: #f4ede8;
  padding: 20px;
  margin: 30px 15px 30px 15px;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: black;
    margin: 0 15px;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  margin-top: 20px;
`;

export const BranchText = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  span:first-child {
    font-weight: 700;
  }
`;

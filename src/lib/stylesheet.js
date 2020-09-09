import styled from "styled-components/macro";

const boardBlue = "#0459D6";
const boarderBlue = "#054bb1";
const shadowBlue = "#052452";

export const MainWrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameBoard = styled.section`
  background: ${boardBlue};
  height: 700px;
  width: 800px;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 10px;
  padding: 10px;

  box-shadow: 5px 5px 0 1px ${shadowBlue};
`;

export const GameCircleWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: ${boardBlue};
  border-radius: 50%;

  box-shadow: 2px 2px ${shadowBlue};
  border: 5px solid ${boarderBlue};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleSlot = styled.section`
  height: calc(100% - 10px);
  width: calc(100% - 10px);

  background: white;
  border-radius: 50%;
`;

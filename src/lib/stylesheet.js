import styled from "styled-components/macro";

const boardBlue = "#0459D6";
const boarderBlue = "#054bb1";
const shadowBlue = "#052452";

export const MainWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: grey;

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

  box-shadow: 5px 5px 0 5px ${shadowBlue};

  border-radius: 5px;
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

export const CircleSlot = styled.div`
  height: calc(100% - 10px);
  width: calc(100% - 10px);

  background: ${(props) => props.background || "white"};

  box-shadow: inset 10px 10px 10px #ffffff99;
  border-radius: 50%;
  //If there is a background prop passed to the component
  //(meaning the slot is taken), there will be a border
  border: ${({ background }) => (background ? "2px solid #00000050" : "none")};
`;

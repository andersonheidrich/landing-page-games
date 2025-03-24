import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background-color: black; */
`;

export const Row = styled.div`
  display: flex;

  a {
    display: flex;
  }

  img {
    width: 340px;
    height: 340px;
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  justify-content: center;
  align-items: center;

  .title {
    margin-bottom: 32px;
  }
`;

export const Row = styled.div`
  display: flex;
  background-color: black;

  a {
    display: flex;
  }

  img {
    width: 360px;
    height: 360px;
    cursor: pointer;
  }
`;

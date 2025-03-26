import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;

  .title {
    margin-bottom: 32px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 60%;
  height: auto;
  color: #d5c7b9;
  background-color: #1c1c24;
  border-radius: 16px;
`;

export const Text = styled.div`
  padding: 16px;
  font-weight: bold;
`;

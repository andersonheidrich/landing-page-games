import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px;
  align-items: center;
  color: #d5c7b9;
  background-color: #1c1c24;
`;

export const SocialMedias = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 64px;

  a {
    display: flex;
  }

  /* .email {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  } */

  .media-icon {
    width: 64px;
    height: 64px;
    cursor: pointer;
  }
`;

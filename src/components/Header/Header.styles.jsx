import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 84px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #1c1c24;
  position: fixed;
  z-index: 1000;
`;

export const Navigation = styled.div`
  display: flex;
  width: 96%;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 8px;
  }
`;

export const Menu = styled.div`
  display: flex;

  .menu-item {
    font-weight: bold;
    color: #d5c7b9;
    padding-left: 40px;
    cursor: pointer;

    &:hover {
      color: #8c8c8d;
    }
  }
`;

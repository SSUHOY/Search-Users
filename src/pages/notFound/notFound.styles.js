import styled from "styled-components";

export const Container404 = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: white;
  display: flex;
  padding-top: 10px;
  padding: 4px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0d1117;
`;

export const ErrorCode = styled.h1`
  font-size: 120px;
  letter-spacing: 10px;
  color: #fff;
`;

export const ToMainButton = styled.button`
  width: 241px;
  height: 50px;
  background-color: #1f6feb;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  &:hover {
    background: #0080c1;
  }
  @media screen and (max-width: 620px) {
    display: none;
  }
`;

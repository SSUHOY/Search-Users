import styled from "styled-components";

export const SortByReposDropdown = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 80%;
`;

export const DropdownBtn = styled.button`
  background-color: #1f6feb;
  color: white;
  width: 110px;
  height: 20px;
  border-radius: 10px;
  font-size: 8px;
  border: none;
  outline: none;
  &::before {
    content: "˅ ";
    position: relative;
    width: 0;
    height: 0;
  }
`;

export const SortTitleBlock = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  width: 100%;
  @media (max-width: 768) {
    width: 200px;
  }
`;

export const SortByReposBlock = styled.div`
  display: none;

  &.active  {
    display: block;
    position: absolute;
    background-color: #21262d;
    width: 110px;
    height: 70px;
    z-index: 1;
    top: 192px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #1f6feb;
  }

  @media (max-width: 768px) {
    padding-right: 0px;
  }
`;

export const SortTitle = styled.h4`
  font-weight: 600;
  font-size: 10px;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  width: 100%;
  gap: 3px;
`;

export const Input = styled.input`
  margin-bottom: 4px;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 10px;
  color: #fff;
  padding-bottom: 4px;
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

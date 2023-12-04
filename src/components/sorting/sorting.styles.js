import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 10px;
  padding-top: 10px;
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

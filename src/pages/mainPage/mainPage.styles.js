import styled from "styled-components";

export const SearchForm = styled.div`
  background-color: #21262d;
  padding: 16px;
  border-radius: 10px;
  height: 120px;
  width: 400px;
  display: flex;
  flex-direction: column;
`;
export const SearchTitle = styled.h4`
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const SearchButton = styled.button`
  width: 300px;
  height: 21px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  background-color: #1f6feb;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #365774;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  background-color: #0d1117;
  color: white;
  border: 1px solid grey;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 12px;
  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: grey;
  }
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

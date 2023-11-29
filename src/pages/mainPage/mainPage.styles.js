import styled from "styled-components";

export const SearchForm = styled.div`
  background-color: #21262d;
  padding: 20px;
  border-radius: 10px;
  height: 100px;
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
  width: 50px;
  height: 20px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
  background-color: #1f6feb;
`;

export const SearchInput = styled.input`
  width: 200px;
  background-color: #0d1117;
  color: white;
  border: 1px solid #b1b7bb;
  border-radius: 5px;
  padding-left: 10px;
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

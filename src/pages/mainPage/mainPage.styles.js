import styled from "styled-components";

export const SearchForm = styled.div`
  background-color: #333;
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
`;

export const SearchButton = styled.button`
  width: 50px;
  height: 20px;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
  background-color: #1f6feb;
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;


import styled from "styled-components";

export const Header = styled.header`
width: 100%;
height: 38px;
padding: 6px;
display: flex;
justify-content: flex-end;
background-color: #21262d;
margin-bottom: 20px;
border-radius: 10px;
`

export const HeaderBtn = styled.button`
width: 150px;
height: 100%;
background-color: #238636;
border: none;
  border-radius: 5px;
  color: white;
  font-size: 12px;
  font-weight: bold;
`

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
  margin-top: 12px;
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

export const Error = styled.p`
  position: absolute;
  top: 82px;
  font-size: 8px;
  color: coral;
`;
export const ResultsError = styled.p`
  font-size: 15px;
  color: #fff;
  padding-top: 20px;
`;

export const PaginationBlock = styled.div`
  display: flex;
  width: 400px;
  row-gap: 16px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

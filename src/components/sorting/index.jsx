import React, { useState } from "react";
import * as S from "./sorting.styles";

export const SortByRepos = ({ sortType, setSortType }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <S.SortByReposDropdown>
        <S.DropdownBtn onClick={toggleMenu}>
          Sort by number of repos
        </S.DropdownBtn>
        <S.SortByReposBlock className={isOpen ? "active" : ""}>
          <S.InputBlock>
            <S.Input
              id="q1"
              type="radio"
              name="sort"
              defaultValue="initial value"
              checked={sortType?.sortProperty === ""}
              onChange={() => setSortType({ sortProperty: "" })}
            />
            <S.Label htmlFor="q1">Default</S.Label>
          </S.InputBlock>
          <S.InputBlock>
            <S.Input
              id="q1"
              type="radio"
              name="sort"
              checked={sortType?.sortProperty === "asc"}
              onChange={() => setSortType({ sortProperty: "asc" })}
            />
            <S.Label htmlFor="q1">Ascending</S.Label>
          </S.InputBlock>
          <S.InputBlock>
            <S.Input
              id="q2"
              type="radio"
              name="sort"
              checked={sortType?.sortProperty === "desc"}
              onChange={() => setSortType({ sortProperty: "desc" })}
            />
            <S.Label htmlFor="q1">Descending</S.Label>
          </S.InputBlock>
          <br></br>
        </S.SortByReposBlock>
      </S.SortByReposDropdown>
    </>
  );
};

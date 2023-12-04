import React from "react";
import * as S from "./sorting.styles";

export const SortByRepos = ({ sortType, setSortType }) => {
  console.log(sortType);
  return (
    <>
      <S.SortByReposBlock>
        <S.SortTitleBlock>
          {" "}
          <S.SortTitle>Sort by number of repos:</S.SortTitle>
        </S.SortTitleBlock>
        <S.InputBlock>
          <S.Input
            id="q1"
            type="radio"
            name="sort"
            checked={sortType?.sortProperty === ""}
            onClick={() => setSortType({ sortProperty: "" })}
          />
          <S.Label htmlFor="q1">Default</S.Label>
        </S.InputBlock>
        <S.InputBlock>
          <S.Input
            id="q1"
            type="radio"
            name="sort"
            checked={sortType?.sortProperty === "asc"}
            onClick={() => setSortType({ sortProperty: "asc" })}
          />
          <S.Label htmlFor="q1">Ascending</S.Label>
        </S.InputBlock>
        <S.InputBlock>
          <S.Input
            id="q2"
            type="radio"
            name="sort"
            checked={sortType?.sortProperty === "desc"}
            onClick={() => setSortType({ sortProperty: "desc" })}
          />
          <S.Label htmlFor="q1">Descending</S.Label>
        </S.InputBlock>
        <br></br>
      </S.SortByReposBlock>
    </>
  );
};

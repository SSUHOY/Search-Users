import React from "react";
import { RepositoryIcon } from "../../assets/icons";
import * as S from "./userPage.styles";
const RepoItem = ({ repo }) => {
  const { name, language, description } = repo;
  return (
    <>
      <S.UserRepoItem>
        <S.RepoIconBlock>
          <RepositoryIcon />
        </S.RepoIconBlock>
        <S.RepoInfoBlock>
          <S.UserRepoName>{name}</S.UserRepoName>
          <S.UserDescriptionSpan>description:</S.UserDescriptionSpan>
          <S.UserRepoDescriptionBox>
            {description ? (
              <S.UserRepoDescription>{description}</S.UserRepoDescription>
            ) : (
              <S.UserRepoNoDescription>No description</S.UserRepoNoDescription>
            )}
          </S.UserRepoDescriptionBox>
          <S.RepoLang>
            Written in {language ? language : "(not mentioned)"}
          </S.RepoLang>
        </S.RepoInfoBlock>
      </S.UserRepoItem>
    </>
  );
};

export default RepoItem;

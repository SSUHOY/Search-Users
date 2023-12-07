import React, { useEffect, useState } from "react";
import { RepositoryIcon } from "../../assets/icons";
import * as S from "./userPage.styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RepoItem = ({ repo }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!repo) return null;

  const { name, language, description } = repo;

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
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
                <S.UserRepoNoDescription>
                  No description
                </S.UserRepoNoDescription>
              )}
            </S.UserRepoDescriptionBox>
            <S.RepoLang>
              Written in {language ? language : "(not mentioned)"}
            </S.RepoLang>
          </S.RepoInfoBlock>
        </S.UserRepoItem>
      )}
    </>
  );
};

export default RepoItem;

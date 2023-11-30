import React, { useEffect, useState } from "react";
import * as S from "./userPage.styles";
import { Container } from "../../components/styles/reusable";
import {
  FollowersIcon,
  GitHubLink,
  LocationIcon,
  WebSiteIcon,
} from "../../assets/icons";
import { Link, useParams } from "react-router-dom";
import axios from "../../axios";
import RepoItem from "./repo";

export const UserPage = () => {
  const { login } = useParams();

  const [userInfo, setUsersInfo] = useState({});
  console.log(userInfo);
  const [repos, setRepos] = useState([]);
  console.log(repos);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        console.log(response);
        setUsersInfo(response[0].data);
        setRepos(response[1].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  }, []);

  return (
    <Container>
      <Link to={"/"}>
        <S.BackToMainBtn>Back to main</S.BackToMainBtn>
      </Link>

      <S.UserInformation>
        <S.AvatarBox>
          {userInfo?.avatar_url ? (
            <S.Avatar src={userInfo?.avatar_url} />
          ) : (
            <S.LoadingAva>...</S.LoadingAva>
          )}
        </S.AvatarBox>
        <S.UserContent>
          <S.UserName>{login}</S.UserName>
          <S.UserDescriptionSpan>description:</S.UserDescriptionSpan>
          <S.UserDescriptionBox>
            {userInfo?.bio ? (
              <S.UserDescription>{userInfo?.bio}</S.UserDescription>
            ) : (
              <S.UserRepoNoDescription>No description</S.UserRepoNoDescription>
            )}
          </S.UserDescriptionBox>

          <S.UserMoreData>
            {userInfo?.followers && (
              <S.Followers>
                <FollowersIcon />
                {userInfo?.followers} Followers, {userInfo?.following} Following
              </S.Followers>
            )}
            {userInfo?.location && (
              <S.GeoLocation>
                <LocationIcon />
                {userInfo?.location}
              </S.GeoLocation>
            )}
            {userInfo?.blog && (
              <S.WebSite>
                <WebSiteIcon />
                {userInfo?.blog}
              </S.WebSite>
            )}
            {userInfo?.html_url && (
              <S.GitHubLink>
                <GitHubLink />
                {userInfo?.html_url}
              </S.GitHubLink>
            )}
          </S.UserMoreData>
        </S.UserContent>
      </S.UserInformation>
      {repos.length !== 0 ? (
        <S.UserRepos>
          <S.UserRepoTitle>Repositories</S.UserRepoTitle>
          <S.UserRepoList>
            {repos.map((repo, index) => (
              <RepoItem key={index} repo={repo} />
            ))}
          </S.UserRepoList>
        </S.UserRepos>
      ) : (
        ""
      )}
    </Container>
  );
};

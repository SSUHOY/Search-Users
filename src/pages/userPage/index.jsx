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
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const UserPage = () => {
  const { login } = useParams();

  const [userInfo, setUsersInfo] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(setLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos`),
        ]);
        setUsersInfo(response[0].data);
        setRepos(response[1].data);
        console.log(response);
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
      <SkeletonTheme baseColor="#161B22" highlightColor="#444">
        <S.UserInformation>
          <S.AvatarBox>
            {userInfo?.avatar_url ? (
              <S.Avatar src={userInfo?.avatar_url} />
            ) : (
              <Skeleton height="220px" width="220px" />
            )}
          </S.AvatarBox>
          <S.UserContent>
            <S.UserName>{login}</S.UserName>
            <S.UserDescriptionSpan>description:</S.UserDescriptionSpan>
            {!loading ? (
              <S.UserDescriptionBox>
                {userInfo?.bio ? (
                  <S.UserDescription>{userInfo?.bio}</S.UserDescription>
                ) : (
                  <S.UserRepoNoDescription>
                    No description
                  </S.UserRepoNoDescription>
                )}
              </S.UserDescriptionBox>
            ) : (
              <S.UserDescriptionBox>
                <Skeleton height="50px" width="100%" />
              </S.UserDescriptionBox>
            )}

            {!loading ? (
              <S.UserMoreData>
                {userInfo?.followers ? (
                  <S.Followers>
                    <FollowersIcon />
                    {userInfo?.followers} Followers, {userInfo?.following}{" "}
                    Following
                  </S.Followers>
                ) : (
                  ""
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
            ) : (
              <Skeleton count={4} />
            )}
          </S.UserContent>
        </S.UserInformation>
      </SkeletonTheme>
      {repos.length !== 0 ? (
        <S.UserRepos>
          <S.UserRepoTitle>Repositories</S.UserRepoTitle>
          <SkeletonTheme
            baseColor="#161B22"
            highlightColor="#444"
            height="120px">
            <S.UserRepoList>
              {repos.map((repo, index) => (
                <RepoItem key={index} repo={repo} />
              ))}
            </S.UserRepoList>
          </SkeletonTheme>
        </S.UserRepos>
      ) : (
        ""
      )}
    </Container>
  );
};

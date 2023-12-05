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
import { Pagination } from "../../components/pagination";

export const UserPage = () => {
  const { login } = useParams();

  const [userInfo, setUsersInfo] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({});
  console.log("🚀 ~ file: index.jsx:25 ~ UserPage ~ data:", data);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 750);
    return () => clearTimeout(timer);
  }, [currentPage]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await Promise.all([
          axios.get(`/users/${login}`),
          axios.get(`/users/${login}/repos?per_page=10&page=${currentPage}`),
        ]);
        setData(response[0].data);
        setUsersInfo(response[0].data);
        setRepos(response[1].data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  }, [currentPage, login]);

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
            {loading ? (
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

            {loading ? (
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

      <S.UserRepos>
        {repos.length !== 0 ? (
          <S.TitleReposBlock>
            <S.UserRepoTitle>Repositories</S.UserRepoTitle>
            <Pagination
              onChangePage={(number) => setCurrentPage(number)}
              currentPage={currentPage}
              data={data.public_repos}
            />
          </S.TitleReposBlock>
        ) : (
          ""
        )}
        <SkeletonTheme baseColor="#161B22" highlightColor="#444" height="120px">
          <S.UserRepoList>
            {repos.map((repo, index) => (
              <RepoItem key={index} repo={repo} />
            ))}
          </S.UserRepoList>
        </SkeletonTheme>
      </S.UserRepos>
    </Container>
  );
};

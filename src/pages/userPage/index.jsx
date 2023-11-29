import React from "react";
import * as S from "./userPage.styles";
import { Container } from "../../components/styles/reusable";
import {
  FollowersIcon,
  GitHubLink,
  LocationIcon,
  WebSiteIcon,
} from "../../assets/icons";
import { useParams } from "react-router-dom";

export const UserPage = () => {
  const { login } = useParams();
  console.log(login);
  return (
    <Container>
      <S.UserInformation>
        <S.AvatarBox>
          <S.Avatar src="https://gsm-razbor.ru/UserFiles/Image/img4_32446.png" />
        </S.AvatarBox>
        <S.UserContent>
          <S.UserName>John Wizley</S.UserName>
          <S.UserDescriptionBox>
            <S.UserDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nam, iure. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nam, iure. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nam, iure. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nam, iure. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nam, iure. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nam, iure. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Nam, iure. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Nam, iure.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
              iure. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nam, iure. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Nam, iure.
            </S.UserDescription>
          </S.UserDescriptionBox>

          <S.UserMoreData>
            <S.Followers>
              <FollowersIcon />
              20 Followers, 10 Following
            </S.Followers>
            <S.GeoLocation>
              <LocationIcon />
              USA
            </S.GeoLocation>
            <S.WebSite>
              <WebSiteIcon />
              sadasd
            </S.WebSite>
            <S.GitHubLink>
              <GitHubLink />
              123213.git{" "}
            </S.GitHubLink>
          </S.UserMoreData>
        </S.UserContent>
        {/* <S.UserRepo>
          <S.UserRepoTitle>Repositories</S.UserRepoTitle>
          <S.UserRepoList>
            <S.UserRepoItem>
              <S.UserRepoTitle>Repo Name</S.UserRepoTitle>
              <S.UserRepoDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                repellat?
              </S.UserRepoDescription>
            </S.UserRepoItem>
          </S.UserRepoList>
        </S.UserRepo> */}
      </S.UserInformation>
    </Container>
  );
};

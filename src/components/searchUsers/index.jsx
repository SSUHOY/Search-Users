import React from "react";
import * as S from "./UserCard.styles";

const UserCard = () => {
  return (
    <S.User>
      <S.Avatar>
        <S.UserImage
          src="https://gsm-razbor.ru/UserFiles/Image/img4_32446.png"
          alt="avatar"
        />
      </S.Avatar>
      <S.UserInfo>
        <S.UserName>User Name</S.UserName>
        <S.UserId>ID1233213</S.UserId>
        <S.UserDescription>Front-End Developer</S.UserDescription>
        <S.ViewProfileLink>View profile</S.ViewProfileLink>
      </S.UserInfo>
    </S.User>
  );
};

export default UserCard;

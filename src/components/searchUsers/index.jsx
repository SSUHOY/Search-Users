import React from "react";
import * as S from "./UserCard.styles";
import { NavLink } from "react-router-dom";


const UserCard = ({ user }) => {
  const { login, id, avatar_url } = user;

  return (
    <>
      <S.User>
        <S.Avatar>
          <S.UserImage src={avatar_url} alt="avatar" />
        </S.Avatar>
    
          <S.UserInfo>
            <S.UserName>{login}</S.UserName>
            <S.UserId>ID {id}</S.UserId>
            <NavLink to={`/users/${login}`}>
              <S.ViewProfileLink>View profile</S.ViewProfileLink>
            </NavLink>
          </S.UserInfo>
     
      </S.User>
    </>
  );
};

export default UserCard;

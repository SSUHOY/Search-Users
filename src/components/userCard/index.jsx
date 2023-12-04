import React, { useEffect, useState } from "react";
import * as S from "./UserCard.styles";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserCard = ({ user }) => {
  const { login, id, avatar_url } = user;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <S.User>
        {loading ? (
          <Skeleton width="400px" height="120px" border-radius="10px" />
        ) : (
          <>
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
          </>
        )}
      </S.User>
    </>
  );
};

export default UserCard;

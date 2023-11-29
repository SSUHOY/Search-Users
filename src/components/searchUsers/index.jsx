import React from "react";
import * as S from "./UserCard.styles";
import { NavLink } from "react-router-dom";

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
        <S.UserDescription>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur totam velit, temporibus aspernatur nam non numquam quo eum necessitatibus voluptatem culpa natus fugit et itaque corrupti exercitationem, esse error, dolor placeat delectus perspiciatis fuga! Atque libero qui, corporis sint accusantium ab autem exercitationem saepe mollitia iste officiis voluptatem eum maxime eos optio omnis commodi dignissimos. Explicabo dolore maxime accusamus provident sint. Veniam, vel nihil. Alias sed eum corrupti culpa at eaque, tenetur, assumenda quos eius architecto, nam soluta porro. Nesciunt saepe non reiciendis cum, quidem dolor quasi aliquid excepturi consectetur illo rerum nostrum eaque voluptatibus nam, delectus ab quibusdam consequatur est culpa repellendus cupiditate! Aspernatur quae laudantium enim fugiat eveniet cumque voluptates nesciunt debitis placeat minima id pariatur, neque quos laboriosam ullam voluptatum, aut rem omnis dolorum molestias illo distinctio magnam officia. Porro nesciunt molestias cumque alias aut cupiditate asperiores. Quia quod aspernatur laboriosam rem quidem iure accusantium consectetur dolor.</S.UserDescription>
        <NavLink to="/user">
          <S.ViewProfileLink>View profile</S.ViewProfileLink>
        </NavLink>
      </S.UserInfo>
    </S.User>

  );
};

export default UserCard;

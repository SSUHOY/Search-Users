import styled from "styled-components";

export const User = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  padding-left: 30px;
`;

export const UserName = styled.h4`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const UserId = styled.small`
  font-size: 8px;
  margin-bottom: 25px;
`;

export const UserDescription = styled.p`
  font-size: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ViewProfileLink = styled.a`
text-decoration: none;
  font-size: 10px;
  font-weight: bold;
  color: #1f6feb;
  cursor: pointer;
  margin-top: 34px;
`
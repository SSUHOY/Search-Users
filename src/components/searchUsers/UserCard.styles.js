import styled from "styled-components";

export const User = styled.div`
  display: flex;
  padding: 10px 10px;
  max-width: 500px;
  width: 100%;
  min-height: 120px;
  margin-top: 20px;
  color: #fff;
  background-color: #161b22;
  border-radius: 10px;
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;
export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 8px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  row-gap: 4px;
  justify-content: center;
  color: #fff;
`;

export const UserName = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const UserId = styled.small`
  font-size: 10px;
`;

export const UserDescription = styled.p`
  font-size: 12px;
  overflow: hidden;
  width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ViewProfileLink = styled.a`
  font-size: 12px;
  font-weight: bold;
  color: #1f6feb;
  cursor: pointer;
`;

import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f8f9;
`;

export const UserInformation = styled.div`
  display: flex;
  padding: 10px 40px;
  max-width: 780px;
  width: 100%;
  min-height: 280px;
  margin-top: 20px;
  color: #fff;
  background-color: #161b22;
  border-radius: 10px;
`;

export const AvatarBox = styled.div`
  padding-top: 10px;
  margin-right: 100px;
  margin-top: 10px;
  height: 220px;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Avatar = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 10px;
`;

export const UserName = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

export const UserDescriptionBox = styled.div`
    overflow-y: scroll;
    width: 350px;
    height: 120px;
    overflow-x: hidden; 
    border: 0.5px solid grey;
    border-radius: 5px;
    &::-webkit-scrollbar {
      width: 4px;
      background-color: grey;
        }
        &::-webkit-scrollbar-thumb {
          background-color: white;
          border-radius: 3px;
            }
}
`;
export const UserDescription = styled.p`
  font-size: 14px;
`;

export const UserMoreData = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  row-gap: 3px;
`;

export const Followers = styled.p`
  font-size: 12px;
  
`;
export const GeoLocation = styled.p`
  font-size: 12px;
`;
export const WebSite = styled.p`
  font-size: 12px;
`;
export const GitHubLink = styled.p`
  font-size: 12px;
`;

export const UserRepo = styled.div``;

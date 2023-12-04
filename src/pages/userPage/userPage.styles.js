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

export const BackToMainBtn = styled.button`
  position: relative;
  left: -330px;
  width: 80px;
  height: 40px;
  border-radius: 8px;
  font-size: 10px;
  border: none;
  color: #fff;
  letter-spacing: 0.5px;
  background-color: #1f6feb;
  &:hover {
    background-color: #365774;
  }
  @media (max-width: 768px) {
    left: 0px;
  }
`;
export const UserInformation = styled.div`
  display: flex;
  padding: 10px 40px;
  max-width: 780px;
  height: 274px;
  width: 100%;
  margin-top: 20px;
  color: #fff;
  background-color: #161b22;
  border-radius: 10px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 500px;
    padding: 10px 14px;
  }
`;

export const AvatarBox = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoadingAva = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
  padding-left: 100px;
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

export const Avatar = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 10px;
`;

export const UserName = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
  letter-spacing: 1px;
`;

export const UserDescriptionSpan = styled.span`
  font-size: 10px;
  opacity: 0.5;
  color: #fff;
  border-bottom: 1px solid #35363a;
`;

export const UserDescriptionBox = styled.div`
    overflow-y: scroll;
    max-width: 350px;
    height: 100px;
    overflow-x: hidden; 
    padding: 5px 5px;
    &::-webkit-scrollbar {
      width: 2px;
      background-color: #161B22;
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

export const UserRepoNoDescription = styled.p`
  color: #fff;
  font-size: 12px;
  font-style: italic;
  opacity: 0.2;
`;

export const UserMoreData = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
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

export const UserRepos = styled.div`
  max-width: 780px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px 10px;
  }
`;
export const UserRepoTitle = styled.h2`
  color: #fff;
  margin-bottom: 12px;
  letter-spacing: 1px;
`;
export const UserRepoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const UserRepoItem = styled.div`
  max-width: 780px;
  height: 120px;
  background-color: #161b22;
  padding: 10px 10px;
  border-radius: 10px;
  display: flex;
`;

export const RepoInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserRepoName = styled.h3`
  font-size: 16px;
  color: #fff;
  margin-bottom: 6px;
`;

export const RepoIconBlock = styled.div`
  margin-top: 12px;
`;

export const UserRepoDescriptionBox = styled.div`
overflow-y: scroll;
width: 100%;;
height: 120px;
overflow-x: hidden; 
padding: 2px 1px;
border-top: 1px solid #35363A;
&::-webkit-scrollbar {
  width: 4px;
  background-color: #161B22;
    }
    &::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 3px;
        }
}
`;

export const UserRepoDescription = styled.p`
  font-size: 12px;
  color: #fff;
`;

export const RepoLang = styled.p`
  font-size: 12px;
  color: #fff;
  padding-top: 10px;
`;

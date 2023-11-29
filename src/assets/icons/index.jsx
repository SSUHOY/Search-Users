import React from 'react'
import FollowIcon from '../images/users-solid.svg'
import GeoLocationIcon from '../images/location-dot-solid.svg'
import WebSiteImg from '../images/globe-solid.svg'
import GitHubImg from '../images/github.svg'
import * as S from '../../components/styles/reusable/icons.styles'

export const FollowersIcon = () => {
  return <S.FollowersIcon src={FollowIcon}/>
}
export const LocationIcon = () => {
  return <S.LocationIcon src={GeoLocationIcon}/>
}

export const WebSiteIcon = () => {
  return <S.WebSiteIcon src={WebSiteImg}/>
}

export const GitHubLink = () => {
  return <S.GitHubLink src={GitHubImg}/>
}







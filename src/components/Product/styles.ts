import styled from 'styled-components'
import { Colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${Colors.gray};
  padding: 8px;
  border-radius: 8px;
  position: relative;
  text-decoration: none;
  color: ${Colors.white};
  display: block;
  text-align: center;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  img {
    display: block;
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const TitleH3 = styled.h3`
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 2px solid ${Colors.white};
  color: ${Colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Colors.white};
  color: ${Colors.white};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`

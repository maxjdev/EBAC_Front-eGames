import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Colors = {
  white: '#eee',
  black: '#111',
  gray: '#333',
  green: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Colors.black};
    color: ${Colors.white};
    padding-top: 40px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

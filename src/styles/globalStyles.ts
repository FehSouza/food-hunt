import { createGlobalStyle as css } from 'styled-components'

export const GlobalStyles = css`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.white};
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    font-display: swap;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.04em;
  }

  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span {
    display: inline-block;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    font-display: swap;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.04em;
  }

  button,
  input,
  textarea {
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    outline: none;
    font-family: 'Poppins', sans-serif;
    font-display: swap;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.04em;
  }

  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  a:hover,
  button:hover {
    cursor: pointer;
  }
`

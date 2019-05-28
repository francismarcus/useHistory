import styled from 'styled-components'

const Button = styled.button`
  appearance: none;
  border: 0;
  display: inline-block;
  padding: 0.5em 1em;
  background-color: #fff;
  color: var(--colorPrimary);
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  user-select: none;
  transition: opacity 170ms;
  ${({ disabled }) => disabled && `opacity: 0.4;`}

  &:focus {
    outline: 2px solid var(--colorSecondary);
  }
`

export default Button

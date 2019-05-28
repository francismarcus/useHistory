import styled from 'styled-components'

const Cell = styled.div`
  position: relative;
  width: var(--size);
  height: var(--size);
  cursor: crosshair;
  ${({ isActive }) => isActive && 'background-color: #000'}

  &:before {
    position: absolute;
    ${() => {
      const position = 'calc(var(--borderWidth) * -0.5)'
      return `
          top: ${position};
          right: ${position};
          bottom: ${position};
          left: ${position};
        `
    }}
    border-color: var(--colorSecondary);
    border-style: solid;
    border-width: var(--borderWidth);
    content ''
  }
`

export default Cell

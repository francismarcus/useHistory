import styled from 'styled-components'
import PropTypes from 'prop-types'

const Owl = styled.div`
  & > * + * {
    ${({ axis, scale }) => {
      const directions = {
        x: 'left',
        y: 'top'
      }

      return `margin-${directions[axis]}: ${scale * 0.75}em;`
    }}
  }
`

Owl.propTypes = {
  scale: PropTypes.number,
  axis: PropTypes.oneOf([ 'x', 'y' ])
}

Owl.defaultProps = {
  scale: 1,
  axis: 'y'
}

export default Owl

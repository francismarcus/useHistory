import React from 'react'
import styled from 'styled-components'
import Cell from './cell'

const Grid = styled(({ className, count, drawing, draw }) => {
  let cells = []

  for (let colI = 0; colI < count; colI++) {
    for (let rowI = 0; rowI < count; rowI++) {
      const cellCoords = [ colI, rowI ]

      const isActive = drawing.some(coords =>
        cellCoords[0] === coords[0] && cellCoords[1] === coords[1])

      cells.push(
        <Cell
          key={`${colI}-${rowI}`}
          onClick={() => draw(cellCoords)}
          isActive={isActive}
        />
      )
    }
  }

  return (
    <div className={className}>
      {cells}
    </div>
  )
})`
  --size: 4rem;
  --borderWidth: 2px;
  display: grid;
  grid-auto-rows: var(--size);
  grid-template-columns: repeat(auto-fill, var(--size));
  max-width: calc(var(--size) * ${({ count }) => count});
`

export default Grid

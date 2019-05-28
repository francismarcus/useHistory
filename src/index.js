import React from 'react'
import ReactDOM from 'react-dom'
import useHistory from './lib/use-history'
import Owl from './components/owl'
import Grid from './components/grid'
import Button from './components/button'
import Layout from './components/layout'

const App = () => {
  const [ drawing, setDrawing, drawingHistory ] = useHistory([])

  const draw = coord => setDrawing([ ...drawing, coord ])

  return (
    <Layout>
      <Owl>
        <Owl axis='x'>
          <Button
            onClick={e => {
              e.preventDefault()
              drawingHistory.undo()
            }}
            disabled={!drawingHistory.hasUndo}
          >
            ← Undo
          </Button>
          <Button
            onClick={e => {
              e.preventDefault()
              drawingHistory.redo()
            }}
            disabled={!drawingHistory.hasRedo}
          >
            Redo →
          </Button>
        </Owl>
        <Grid count={8} drawing={drawing} draw={draw} />
      </Owl>
    </Layout>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

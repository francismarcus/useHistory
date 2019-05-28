import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Owl from './owl'

const GlobalStyle = createGlobalStyle`
  :root {
    --colorPrimary: #2C3E50;
    --colorSecondary: #f1c40e;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    padding: 2rem;
    background-color: var(--colorPrimary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    color: #fff;
  }

  a {
    color: inherit;
  }
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Owl scale={3}>
      <Owl>
        <h1>useHistory</h1>
        <p>Hook for adding undo and redo to React state.</p>
        <p>Click or tap a cell to draw.</p>
      </Owl>
      {children}
      <Owl>
        <h2>Ideas</h2>
        <Owl as='ul'>
          <li>Make it work with useReducer.</li>
          <li>Is it performant?</li>
          <li>Add option to group versions that were created within a certain time threshold.</li>
          <li>Add option to limit number of versions kept.</li>
          <li>When you make a change in the past, future versions are discarded. Would it be possible instead to maintain branches of versions?</li>
          <li>I kinda feel like Immutable.js would be perfect for this, but we can't make people install Immutable.js <em>just</em> to get undo and redo in their app.</li>
          <li>It should be possible to drag to draw on the demo. Because that would be fun.</li>
          <li>The demo should have a better way of checking if a cell is active.</li>
          <li>The demo shouldn't allow a cell to be drawn on while it is active.</li>
        </Owl>
      </Owl>
      <hr />
      <p><small>Made by <a href='http://ash.gd'>Ash</a></small></p>
    </Owl>
  </>
)

export default Layout

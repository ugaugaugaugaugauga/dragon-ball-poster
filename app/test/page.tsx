import React from 'react'
import TestPage from '../components/test-comp'

const App = () => {
  return (
    <div>
      <TestPage>
        <p>This is a paragraph.</p>
        <button>Click me!</button>
        <div>Another child element.</div>
        <div>Another child element.</div>
        <div>Another child element.</div>
        <div>Another child element.</div>
        <div>Another child element.</div>
      </TestPage>
    </div>
  )
}

export default App

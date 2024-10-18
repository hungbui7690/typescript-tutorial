import Component from './02-props'

function App() {
  return (
    <main>
      <Component name='peter' id={123}>
        {/* children */}
        <h2>hello world</h2>
      </Component>
    </main>
  )
}

export default App

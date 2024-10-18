import Component from './02-props'

function App() {
  return (
    <main>
      {/* 1a. passing props */}
      <Component name='peter' id={123} />

      {/* 1b. because we provide annotation in 2., if there's anything missing here -> it will cause error */}
      {/* <Component name='peter' /> */}
    </main>
  )
}

export default App

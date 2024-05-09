import { useState } from 'react'
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyle />
    </>
  )
}

export default App

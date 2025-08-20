import Catalog from "./components/Catalog"
import { CountProvider } from "./components/CountProvider"
import Fibonacci from "./components/Fibonacci"
import Parent from "./components/Parent"


function App() {

  return (
    <>
      <Fibonacci />
      <Catalog />
      <Parent />
      <CountProvider />
    </>
  )
}

export default App

import Catalog from "./components/Catalog"
import { CountProvider } from "./components/CountProvider"
import Fibonacci from "./components/Fibonacci"
import MarkdownPlayground from "./components/MarkdownPlayground"
import Parent from "./components/Parent"
import ParentChild from "./components/ParentChild"

function App() {

  return (
    <>
      <Fibonacci />
      <Catalog />
      <Parent />
      <CountProvider />
      <MarkdownPlayground />
      <ParentChild />
    </>
  )
}

export default App

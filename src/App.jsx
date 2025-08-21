import Autocomplete from "./components/Autocomplete"
import Catalog from "./components/Catalog"
import Counter from "./components/Counter"
import CounterRef from "./components/CounterRef"
import { CountProvider } from "./components/CountProvider"
import Fibonacci from "./components/Fibonacci"
import MarkdownPlayground from "./components/MarkdownPlayground"
import Parent from "./components/Parent"
import ParentChild from "./components/ParentChild"
import ParentFour from "./components/ParentFour"
import ParentSecond from "./components/ParentSecond"
import ParentThird from "./components/ParentThird"
import PoliticianList from "./components/PoliticianList"

function App() {

  return (
    <>
      <CounterRef />
      <Autocomplete />
      <Counter />
      <PoliticianList />
      <Fibonacci />
      <Catalog />
      <Parent />
      <CountProvider />
      <MarkdownPlayground />
      <ParentChild />
      <ParentSecond />
      <ParentThird />
      <ParentFour />
    </>
  )
}

export default App

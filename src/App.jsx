import Autocomplete from "./components/Autocomplete"
import Catalog from "./components/Catalog"
import CheckboxCounter from "./components/CheckboxCounter"
import Contatore from "./components/Contatore"
import Counter from "./components/Counter"
import CounterRef from "./components/CounterRef"
import { CountProvider } from "./components/CountProvider"
import Fibonacci from "./components/Fibonacci"
import FocusInput from "./components/FocusInput"
import FocusInput2 from "./components/FocusInput2"
import InputWithPrevious from "./components/InputWithPrevious"
import Lista2 from "./components/Lista2"
import MarkdownPlayground from "./components/MarkdownPlayground"
import NoteApp from "./components/NoteApp"
import Numeri from "./components/Numeri"
import Parent from "./components/Parent"
import ParentChild from "./components/ParentChild"
import ParentFour from "./components/ParentFour"
import ParentSecond from "./components/ParentSecond"
import ParentThird from "./components/ParentThird"
import PoliticianList from "./components/PoliticianList"
import PreviousValueInput from "./components/PreviousValueInput"
import SalvaNome from "./components/SalvaNome"
import SnackHooks from "./components/SnackHooks"
import Somma from "./components/Somma"
import Spesa from "./components/Spesa"
import ThemeSwitcher from "./components/ThemeSwitcher"
import TodoList from "./components/TodoList"
import ToggleComponent from "./components/ToggleComponent"

function App() {

  return (
    <>
      <Contatore />
      <SalvaNome />
      <Lista2 />
      <Numeri />
      <Somma />
      <FocusInput2 />
      <NoteApp />
      <Spesa />
      <TodoList />
      <SnackHooks />
      <InputWithPrevious />
      <ThemeSwitcher />
      <ToggleComponent />
      <CheckboxCounter />
      <PreviousValueInput />
      <FocusInput />
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

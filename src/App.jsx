import Autocomplete from "./components/Autocomplete"
import Catalog from "./components/Catalog"
import CheckboxCounter from "./components/CheckboxCounter"
import Contatore from "./components/Contatore"
import Contatore2 from "./components/Contatore2"
import Counter from "./components/Counter"
import CounterReducer from "./components/CounterReducer"
import CounterRef from "./components/CounterRef"
import { CountProvider } from "./components/CountProvider"
import Fibonacci from "./components/Fibonacci"
import FocusInput from "./components/FocusInput"
import FocusInput2 from "./components/FocusInput2"
import FocusInput3 from "./components/FocusInput3"
import InputWithPrevious from "./components/InputWithPrevious"
import Lista2 from "./components/Lista2"
import Lista3 from "./components/Lista3"
import MarkdownPlayground from "./components/MarkdownPlayground"
import NoteApp from "./components/NoteApp"
import Numeri from "./components/Numeri"
import Numeri2 from "./components/Numeri2"
import Parent from "./components/Parent"
import ParentChild from "./components/ParentChild"
import ParentFour from "./components/ParentFour"
import ParentSecond from "./components/ParentSecond"
import ParentThird from "./components/ParentThird"
import PoliticianList from "./components/PoliticianList"
import PreviousValueInput from "./components/PreviousValueInput"
import SalvaNome from "./components/SalvaNome"
import SalvaNome2 from "./components/SalvaNome2"
import SnackHooks from "./components/SnackHooks"
import Somma from "./components/Somma"
import Somma2 from "./components/Somma2"
import Spesa from "./components/Spesa"
import ThemeSwitcher from "./components/ThemeSwitcher"
import TodoList from "./components/TodoList"
import ToggleComponent from "./components/ToggleComponent"

function App() {

  return (
    <>
      <CounterReducer />
      <Contatore2 />
      <SalvaNome2 />
      <Lista3 />
      <Numeri2 />
      <Somma2 />
      <FocusInput3 />
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

import Autocomplete from "./components/Autocomplete"
import Catalog from "./components/Catalog"
import CheckboxCounter from "./components/CheckboxCounter"
import Counter from "./components/Counter"
import CounterRef from "./components/CounterRef"
import { CountProvider } from "./components/CountProvider"
import Fibonacci from "./components/Fibonacci"
import FocusInput from "./components/FocusInput"
import InputWithPrevious from "./components/InputWithPrevious"
import MarkdownPlayground from "./components/MarkdownPlayground"
import Parent from "./components/Parent"
import ParentChild from "./components/ParentChild"
import ParentFour from "./components/ParentFour"
import ParentSecond from "./components/ParentSecond"
import ParentThird from "./components/ParentThird"
import PoliticianList from "./components/PoliticianList"
import PreviousValueInput from "./components/PreviousValueInput"
import SnackHooks from "./components/SnackHooks"
import ThemeSwitcher from "./components/ThemeSwitcher"
import TodoList from "./components/TodoList"
import ToggleComponent from "./components/ToggleComponent"

function App() {

  return (
    <>
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

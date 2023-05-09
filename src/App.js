import logo from './logo.svg';
import './App.css';
import Counter from './component/usereducer';
import Factorial from './component/usememo';

function App() {
  return (
    <>
    <h1>Factorial using useMemo</h1>
    <Factorial />
    <h1>Countering state using useReducer</h1>
    <Counter />
    </>
  );
}

export default App;

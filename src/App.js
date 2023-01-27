import './App.css';
import { useGameContext } from './context/GameContext.js';

function App() {
  const { currentPlayer } = useGameContext();
  console.log(currentPlayer);
  return <div></div>;
}

export default App;

import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from "./components/Day";

function App() {
  return (
    <div className="App">
      <Header />
      <DayList />
      <Day />
    </div>
  );
}

export default App;

import './App.css';
import Hello from './components/Hellow';
import Welcome from './components/Welocome';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
      <Welcome />
      <div className={styles.box}>App</div>
    </div>
  );
}

export default App;

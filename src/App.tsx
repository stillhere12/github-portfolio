import { useState } from 'react';
import './components/App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [dark, setDark] = useState(false);
  function toggle() {
    console.log(dark);
    document.body.classList.toggle('dark-mode');
    setDark(!dark);
  }
  return (
    <div className={dark ? 'app dark-mode' : 'app'}>
      <button onClick={toggle}>{dark ? 'light mode' : 'dark mode'}</button>
      <h1 className="app-title">GitHub User Search</h1>
      <SearchBar />
    </div>
  );
}

export default App;

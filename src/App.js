import './App.css';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <NavBar />
        <Home/>
      </header>
    </div>
  );
}

export default App;

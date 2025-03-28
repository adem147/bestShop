import './App.css';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <NavBar />
        <ProductPage/>
      </header>
    </div>
  );
}

export default App;

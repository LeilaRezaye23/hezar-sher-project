import logo from './logo.svg';
import homeimage from './home.svg';
import './App.css';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
      <Home logo={logo} image={homeimage} />
    </div>
  );
}

export default App;

import './App.css';
import Main from './components/Main';
import Succes from './components/Succes';
import{Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/success' element={<Succes />} />
    </Routes>
    </div>
  );
}

export default App;

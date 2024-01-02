import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='dashboard' element = {<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;

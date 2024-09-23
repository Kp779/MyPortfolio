import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './components/Index.jsx';
import './App.css'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Index />
    </BrowserRouter>
    </div>
  );
}

export default App;

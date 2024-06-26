import logo from './logo.svg';
import './App.css';
import AddSmartphone from './components/AddSmartphone';
import SearchSmartphone from './components/SearchSmartphone';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path="/"element={<AddSmartphone/>}/>   
<Route path="/search"element={<SearchSmartphone/>}/>   
</Routes>
   </BrowserRouter>

  
  );
}

export default App;

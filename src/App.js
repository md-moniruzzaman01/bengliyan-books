
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Additem from './Components/AddItemPage/Additem';
import Blogs from './Components/BlogsPage/Blogs';
import Home from './Components/HomePage/Home';
import ManagePage from './Components/ManagePage.js/ManagePage';
import NavBarSection from './Components/SharedPageSection/NavBarSection';

function App() {
  return (
    <div className="App">
      
      <NavBarSection></NavBarSection>
      <Routes>
      <Route path="/" element={<Home></Home>}/>
      <Route path="/home" element={<Home></Home>}/>
      <Route path="/additem" element={<Additem/>}/>
      <Route path="/manage" element={<ManagePage/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/login" element={<Home></Home>}/>
      <Route path="/register" element={<Home></Home>}/>
       
       
      
    </Routes>
    </div>
  );
}

export default App;

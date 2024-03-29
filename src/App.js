import './App.css';
import Home from './pages/Home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';


function App() {
  return (
    <BrowserRouter>
    <Topbar />
    
    <div className='container'>
      <Sidebar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/user/:userId" element={<User />} />
      <Route path="/newUser" element={<NewUser />} />

      <Route path="/productList" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductList />} />
      <Route path="/newProduct" element={<ProductList />} />
      </Routes>
      </div>
  
    </BrowserRouter>
  );
}

export default App;

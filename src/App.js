import Home from './components/Home'
import BlogPage from './components/BlogComponent/BlogPage'
import BlogEdit from './components/BlogComponent/BlogEdit'
import Login from './components/LoginComponent/Login'
import Admin from './components/AdminComponent/Admin'
import './App.css';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blogs" element={<BlogPage />}/>
      <Route path="/blogs/blog-edit" element={<BlogEdit />}/>
      <Route path="/admin" element={<Admin />}/>
      <Route path="/admin/login" element={<Login />}/>
    </Routes>
  );
}

export default App;

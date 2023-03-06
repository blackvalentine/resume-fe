import Home from './components/Home'
// import BlogPage from './components/BlogComponent/BlogPage'
// import BlogEdit from './components/BlogComponent/BlogEdit'
// import Login from './components/LoginComponent/Login'
// import Admin from './components/AdminComponent/Admin'
// import BlogDetail from './components/BlogComponent/BlogDetail'
import NotFound from './components/NotFound'
import './App.scss';
import { Routes, Route } from "react-router-dom"
import Resume from './components/ResumeComponent/Resume'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/blogs" element={<BlogPage />} />
      <Route path="/blogs/blog-edit" element={<BlogEdit />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/blogs/:id" element={<BlogDetail />} /> */}
      <Route path="*" element={<NotFound />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;

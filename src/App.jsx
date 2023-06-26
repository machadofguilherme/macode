import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Topbar from './components/Topbar/Topbar';
import Admin from './pages/Admin/Admin';
import PrivateRouter from './router/PrivateRouter';
import Post from './pages/Post/Post';
import Author from './pages/Author/Author';
import Create from './pages/Create/Create';
import Edit from './pages/Edit/Edit';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/post/:id" element={ <Post /> } />
        <Route path="/author" element={ <Author /> } />

        <Route
          path="/admin"
          element={
            <PrivateRouter>
              <Admin />
            </PrivateRouter>
          }
        />

        <Route
          path="/admin/edit/:id"
          element={
            <PrivateRouter>
              <Edit />
            </PrivateRouter>
          }
        />

        <Route
          path="/admin/create"
          element={
            <PrivateRouter>
              <Create />
            </PrivateRouter>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

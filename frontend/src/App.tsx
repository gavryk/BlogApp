import { Route, Routes, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Single from './pages/Single';
import { AnimatePresence } from 'framer-motion';
import { Write } from './pages/Write';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<Single />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;

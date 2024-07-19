import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppLayout from './ui/AppLayout';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Collections from './pages/Collections';

import Heritage from './pages/Heritage';
import Weavers from './pages/Weavers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="heritage" element={<Heritage />} />
          <Route path="weavers" element={<Weavers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

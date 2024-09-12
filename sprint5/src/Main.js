import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductRegistration from './pages/ProductRegistration';

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/items" element={<Products />} />
          <Route path="/registration" element={<ProductRegistration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

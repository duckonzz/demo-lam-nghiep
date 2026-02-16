import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutDetail from './pages/AboutDetail';
import WarrantyPage from './pages/WarrantyPage';
import TechnicalGuide from './pages/TechnicalGuide';
import Header from './components/Header';
import FloatingButtons from './components/FloatingButtons';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gioi-thieu" element={<AboutDetail />} />
            <Route path="/chinh-sach-bao-hanh" element={<WarrantyPage />} />
            <Route path="/ky-thuat" element={<TechnicalGuide />} />
          </Routes>
        </main>
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
};

export default App;

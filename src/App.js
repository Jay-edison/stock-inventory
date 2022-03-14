import Home from './pages/home';
import RequestManagement from './pages/request_management';
import VendorManagement from './pages/vendor_management';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Sales from './pages/sales';
import Stock from './pages/stock';
import Settings from './pages/settings';
import Report from './pages/report';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="request-management" element={<RequestManagement />} />
          <Route path="vendor-management" element={<VendorManagement />} />
          <Route path="sales" element={<Sales />} />
          <Route path="stock" element={<Stock />} />
          <Route path="settings" element={<Settings />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

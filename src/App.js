import { Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import QuotesPage from './pages/QuotesPage';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="quotes" element={<QuotesPage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

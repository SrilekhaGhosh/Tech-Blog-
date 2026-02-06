import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import PageSEO from "./utils/PageSEO"

function App() {
  return ( 
    <HelmetProvider>
      <BrowserRouter>
        {/* Global Website Schema and Meta Tags */}
        <PageSEO isHome={true} /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
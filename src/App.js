import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import About from './components/About';
import Counter  from './pages/Counter';
import Product from './pages/Product';
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} >
        
          </Route>
          <Route path="/product" element={<Product />} >
        
          </Route>
          <Route path="/counter" element={<Counter />} >
        
        </Route>

        </Routes>
        {/* <Link to={`/about?name=mien&age=20`}>about</Link> */}
      </BrowserRouter>

    </div>
  )
}

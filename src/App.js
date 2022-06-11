import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path="/" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      
      </Router>
    </>
  );
}

export default App;

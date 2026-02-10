import './App.css'
import PropertyPage from './pages/user/PropertyPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Valentines from './pages/user/Valentines';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/property' element={<PropertyPage />}/>
          <Route path='/' element={<Valentines />}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './Paginas/Navbar'
import Tabla from './Paginas/Tabla'
import Modal from './Paginas/modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Paginas/Login';


function App() {
  return (
    <>

      

      <BrowserRouter>
        <Routes>

        <Route element={<Navbar></Navbar>} path='/Navbar'></Route>
        <Route element={<Tabla></Tabla>} path='/'></Route>
        <Route element={< Modal/>} path='/Modal'></Route>
        <Route element={<LoginForm/>} path='/Login'></Route>
       
            
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

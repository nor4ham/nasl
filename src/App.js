import {Container,Row} from 'react-bootstrap';
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import {Banner} from './components/Banner';
import {Sellers} from './components/Sellers';
import {Camels} from './components/Camels';
import {Login} from './components/Login'
import {Registration} from './components/Registration'
import { Routes, Route } from "react-router-dom";
import {CamelProfile} from './components/CamelProfile'
function App() {
  return (
    <Container>
    <Row >
     <NavBar/> 
    </Row>
    <Row className='bg' >
    </Row>
    <Row  className='main ' >

     <Routes>    
     <Route path='/' element={<Row  className='main ' >
      <Banner/><Sellers/><Camels/></Row>}></Route>
    <Route path='/login' element={ <Login/>}></Route>
    <Route path='/signup' element={ <Registration/>}></Route>
    <Route path='/CamelProfile/:id' element={ <CamelProfile/>}></Route>

    
    </Routes> 
    </Row>

    <br/>
    <Row className='bg' > </Row>
    <Row >
     <Footer/>
    </Row>
  </Container>
  );
}

export default App;

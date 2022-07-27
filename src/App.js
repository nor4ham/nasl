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
import {Order} from './components/Order'
import {MyProfile} from './components/MyProfile'
import {EditMyProfile} from './components/EditMyProfile'
import {SuccessAlert} from './components/SuccessAlert'
import {MyCamels} from './components/MyCamels'
import {AddProfile} from './components/AddProfile'




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
    <Route path='/' element={<Row  className='main ' ><Banner/><Sellers/><Camels/></Row>}></Route>
    <Route path='/login' element={ <Login/>}></Route>
    <Route path='/signup' element={ <Registration/>}></Route>
    <Route path='/CamelProfile/:id' element={ <CamelProfile/>}></Route>
    <Route path='/CamelProfile/:id/Order' element={ <Order/>}></Route>
    <Route path='/Profile' element={ <MyProfile/>}></Route>
{/*<Route path='/Profile/edit/SuccessAlert' element={ <SuccessAlert/>}></Route>*/}   
    <Route path='/Profile/edit' element={ <EditMyProfile/>}></Route>
    <Route path='/Profile/add' element={ <AddProfile/>}></Route>
    <Route path='/myCamels' element={ <MyCamels/>}></Route>

    
    
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

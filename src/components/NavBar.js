import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'; 
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
  const navigate = useNavigate()

  const [activeLink, setActiveLink] = useState('home');
  const onUpdateActiveLink = (value) => {setActiveLink(value);}
  const login = localStorage.getItem("token")
  const logout=()=>{
    localStorage.clear()
    navigate("/");

  }
    const nav= ()=>{
    return(
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
       <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>الرئسية</Nav.Link>
       <Nav.Link href="/#sellers" className={activeLink === 'sellers' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sellers')}>شركاؤنا   </Nav.Link>
       <Nav.Link href="/#order" className={activeLink === 'order' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('order')}>اطلب الان </Nav.Link>
     </Nav>

        <span className="navbar-text">
         <div className="social-icon">
            <a href="#"><img src={navIcon1} alt="" /></a>
            <a href="#"><img src={navIcon2} alt="" /></a>
            <a href="#"><img src={navIcon3} alt="" /></a>
          </div> 
          <HashLink to='signup'>
            <button className="vvd"><span> تسجيل</span></button>
          </HashLink>
          <HashLink to='login'>
            <button className="vvd"><span>تسجيل الدخول</span></button>
          </HashLink>
        </span>
      </Navbar.Collapse>

    )
  }

  const navLogin= ()=>{
    return(
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
       <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>الرئسية</Nav.Link>
       <Nav.Link href="/Profile" className={activeLink === 'Profile' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Profile')}>ملفي  </Nav.Link>
       <Nav.Link href="/myCamels" className={activeLink === 'myCamels' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('myCamels')}>جمالي </Nav.Link>
     </Nav>
        <span className="navbar-text">
         <div className="social-icon">
            <a href="#"><img src={navIcon1} alt="" /></a>
            <a href="#"><img src={navIcon2} alt="" /></a>
            <a href="#"><img src={navIcon3} alt="" /></a>
          </div> 
          <HashLink to='/'>
            <button onClick={logout}className="vvd"><span> تسجيل خروج </span></button>
          </HashLink>
          
        </span>
      </Navbar.Collapse>

    )
  }




  
  return (
    
      <Navbar expand="md" >
        <Container className="logo">
          <Navbar.Brand  href="/">
          <img src={logo} alt="Logo" width={'70px'} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          {login!=null?navLogin():nav()}  
          
{/*        {first && <></>}
          {x && <></>} */}
        </Container>
      </Navbar>
  )
}
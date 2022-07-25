import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg'; 
import { HashLink } from 'react-router-hash-link';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  // const [scrolled, setScrolled] = useState(false);
/* 
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []) */

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" /* className={scrolled ? "scrolled" : ""} */>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" width={'70px'} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>الرئسية</Nav.Link>
              <Nav.Link href="#sellers" className={activeLink === 'sellers' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('sellers')}>شركاؤنا   </Nav.Link>
              <Nav.Link href="#order" className={activeLink === 'order' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('order')}>اطلب الان </Nav.Link>
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
        </Container>
      </Navbar>
  )
}
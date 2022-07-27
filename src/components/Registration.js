import {React,useState} from 'react'
import { Col, Row, Container } from "react-bootstrap";
import headerImg from "../assets/img/logo.png";
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export   function Registration() {
  return (
    <section className="banner" id="home">
    <Container>
     <Row className="aligh-items-center">
      <Col xs={12} md={6} xl={7}>
      <div>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
             <div class="signup-form">
                <form action="" class="       ">
                    <h4 class="mb-5 text-secondary">تسجيل مستخدم جديد </h4>
                    <div class="row">
                        <div class="mb-3 col-md-12">
                          
                            <label>اسم المستخدم<span class="text-danger">*</span></label>
                            <input type="text" name="username" class="form-control" placeholder="اسم المستخدم"/>
                        </div>

                        
                        <div class="mb-3 col-md-12">
                            <label>كلمةالمرور<span class="text-danger">*</span></label>
                            <input type="password" name="password" class="form-control" placeholder="كلمةالمرور"/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>تاكيد كلمةالمرور<span class="text-danger">*</span></label>
                            <input type="password" name="confirmpassword" class="form-control" placeholder="تاكيد كلمةالمرور"/>
                        </div>
                        <div class="col-md-12">
                        <button onClick={() => console.log('connect')}>&nbsp;    سجل  &nbsp; <ArrowRightCircle size={25} /></button>
                        </div>
                    </div>
                </form>
                <p class="text-center mt-3 text-secondary">اذا كنت تملك حساب <a href="#">فسجل الدخول </a></p>
            </div>
          </Col>
      </Row>
    </Container>
  </div>

      </Col>
      <Col xs={12} md={6} xl={5}>
       <TrackVisibility>
        {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
            <img src={headerImg} alt="Header Img"/>
          </div>}
      </TrackVisibility>
    </Col>
  </Row>
</Container>
    </section>

  )
}

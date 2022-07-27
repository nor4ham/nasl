import {React,useState} from 'react'
import { Col, Row, Container } from "react-bootstrap";
import headerImg from "../assets/img/logo.png";
import TrackVisibility from 'react-on-screen';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export   function Registration() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate("")
  const RegisterUser = () => {
    axios
      .post(`http://nasel.herokuapp.com/accounts/register`, {
          username, password, email
        
      })
      .then((res) => {
        console.log(res);
        console.log(username, password, email)
        navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
        // setIncorrectInfo(true)
        alert(err );
      });
   
    }
  return (
    <section >
          <br/><br/><br/><br/><br/><br/>
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
                            <input  onChange={(e)=> {setUserName(e.target.value);}} type="text" name="username" class="form-control" placeholder="اسم المستخدم"/>
                        </div>

                                          
                        <div class="mb-3 col-md-12">
                            <label>البريد الالكتروني<span class="text-danger">*</span></label>
                            <input type="email" name="email" class="form-control" placeholder="البريد الالكتروني" onChange={(e)=> {setEmail(e.target.value);}}/>
                        </div>

                        
                        <div class="mb-3 col-md-12">
                            <label>كلمةالمرور<span class="text-danger">*</span></label>
                            <input type="password"  onChange={(e)=> {setPassword(e.target.value);}}name="password" class="form-control" placeholder="كلمةالمرور"/>
                        </div>
                        <div class="mb-3 col-md-12">
                            <label>تاكيد كلمةالمرور<span class="text-danger">*</span></label>
                            <input type="password" onChange={(e)=> {setPassword(e.target.value);}}name="confirmpassword" class="form-control" placeholder="تاكيد كلمةالمرور"/>
                        </div>
                        <div class="col-md-12">
                        <button className="  button-profile" onClick={RegisterUser}>&nbsp;    سجل  &nbsp;</button>
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

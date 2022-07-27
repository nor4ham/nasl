import {React,useState} from 'react'
import { Col, Row, Container } from "react-bootstrap";
import headerImg from "../assets/img/logo.png";
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
export   function Login() {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const loginUser = () => {
    axios
      .post(`http://nasel.herokuapp.com/accounts/login`, {
        username,
        password
       })
       .then((res) => {
        
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
/*           window.location.reload()
 */        }
      })
      .catch((err) => {
        console.log(err);
        alert("كلمة السر او استخدم غير صحيحه" );

      });
  };
  return (
    <section >
    <br/><br/><br/><br/>
    <Container>
     <Row className="aligh-items-center">
      <Col xs={12} md={6} xl={7}>
      <div>
    <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center">
        <Col md={8} lg={6} xs={12}>
             <div class="signup-form">
                    <h4 class="mb-5 text-secondary">تسجيل الدخول </h4>
                    <div class="row">
                        <div class="mb-3 col-md-12">
                          
                            <label>اسم المستخدم<span class="text-danger">*</span></label>
                            <input type="text"onChange={(e) =>{setUserName(e.target.value)}} name="username" class="form-control" placeholder="اسم المستخدم"/>
                        </div>

                        
                        <div class="mb-3 col-md-12">
                            <label>كلمةالمرور<span class="text-danger">*</span></label>
                            <input type="password"onChange={(e) =>{setPassword(e.target.value)}} name="password" class="form-control" placeholder=" كلمةالمرور"/>
                        </div>
                       
                        <div class="col-md-12">
                        <button className="  button-profile"  onClick={loginUser}>&nbsp; تسجيل الدخول &nbsp; </button>
                        </div>
                    </div>
                <p class=" mt-3 text-secondary"><a href="#">هل نسيت كلمةالمرور ؟</a></p>
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

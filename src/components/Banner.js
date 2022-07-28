import {React,useState, useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/logo.png";
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

export   function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["أسفرت وأنورت، حياك بموقع نسل"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>  
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">ياهلا وسهلا </span>

                <h1>{` `} <span/*  className="txt-rotate" */ dataPeriod="1000" data-rotate='[ "سفرت وأنورت، حياك بموقع نسل" ]'><span className="wrap">{text}</span></span></h1>
                  <p>هنا تقدر تلقى الجمل المناسب  لناقتك لسلاله اقوى ، وبرضو تقدر تنضم لنا وتبيع للمهتمين مثلك!</p>
                  <HashLink to='signup'>
                  <button onClick={() => console.log('connect')}>&nbsp; انضم الينا وكنت احد شركاؤنا    &nbsp; <ArrowRightCircle size={25} /></button>
                  </HashLink>
              </div>}
            </TrackVisibility>
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

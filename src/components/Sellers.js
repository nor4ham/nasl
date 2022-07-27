import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Card} from 'react-bootstrap';

export   function Sellers() {
 const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const dataList = [
        {
            id: "1",
            name: "دبوس الدبوس",
            image: "https://gumlet.assettype.com/sabq%2Fimport%2Fuploads%2Fmaterial-file%2F5e173b04f1e32671028b4593%2F5e173afdaeaa2.jpg?auto=format%2Ccompress&fit=max&w=750&dpr=1.5",

        },
        {
            id: "2",
            name: "حزام  العجمي",
            image: "http://www.alduwaser.org/up/pfiles/1504/888.jpg",
  
        },
        {
          id: "3",
          name: "العاصي الشمري ",
          image: "https://al-jafr.org.sa/wp-content/uploads/2020/01/E8C857D4-591C-409A-9630-A09B815C801A.jpeg",
      },
      ];
      return (
        <section className="sellers" id="sellers">
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sellers-bx wow zoomIn">
                            <h2>شركاؤنا  </h2>
                            <p> كن شريك في نسل وساهم في الحفاظ على إرث عظيم نملكه في وطننا!</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme sellers-slider">
                              {dataList.map(function (data) {
                               const {  name, image } = data;
                               return (
                                <div className="item">
                                <Card id="card"  style={{ width: '100%'}} >
                              <img src={image} alt="Image" />

                                <Card.Body>
                                  <Card.Title>{name}</Card.Title>
                                  <Card.Text>
                                    هنا معلومات عن {name} واهم انجازاته 
                                  </Card.Text>
                                </Card.Body>
                              </Card> 
                                </div>
                               )

                              }) } 
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
         </section>
      )
    
}

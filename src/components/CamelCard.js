import React from 'react'
import { Col } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

export   function CamelCard({ title, description, imgUrl ,id}) {
  return (
    <Col size={12} sm={6} md={4} onClick={() => console.log("lll")}>
    <Link to={`/CamelProfile/${id}`} >
    <div className="proj-imgbx" >
      <img src={imgUrl}  />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
    </Link>

  </Col>
  )
}

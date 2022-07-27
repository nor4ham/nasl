import React from 'react'
import { HashLink } from 'react-router-hash-link';
import { useState ,useEffect} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export  function Comments() {
  const [comment, setComment] = useState();
  const [commentget, setCommentget] = useState([]);
  const [user, setUser] = useState();
  const [date, setDate] = useState();
  


 const navigate = useNavigate("")


 const token =localStorage.getItem("token")


 const Sendcomment=() =>{
   axios.post ('http://127.0.0.1:8000/comment/add', {
    comment,date
   },{headers: { 'Authorization': `Bearer ${token}`}}).then(res=>{
     
     navigate("/")
   })
 
 }




  useEffect(()=>{
    axios.get("http://127.0.0.1:8000/comment/all").then((res)=>{
      console.log(res.data.comment);
      setCommentget(res.data.comment)
    })
  },[])
  return (
    <div class="container">
     <div class="row">
         <div class="mb-3 col-md-12">
           <h2>اكتب تعليق:</h2>
              <textarea name="comment" class="form-control" placeholder="تعليق" onChange={(e)=> {setComment(e.target.value);}}/>
         </div>
         <span >
        <button className="  button-profile" onClick={Sendcomment}>&nbsp;  علق  &nbsp;</button>
       </span>
          </div>
          {commentget.map((e) => (
    <div class="col-md-12">
        <div class="media g-mb-30 media-comment">
            <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Image Description"/>
            <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
              <div class="g-mb-15">
                <h5 class="h5 g-color-gray-dark-v1 mb-0">محمد</h5>
                <span class="g-color-gray-dark-v4 g-font-size-12">من 3 ايام</span>
              </div>

              <p>{e.comment}</p>
        
              <ul class="list-inline d-sm-flex my-0">
       
                <li class="list-inline-item ml-auto">
                  <a class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover" href="#!">
                    <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                    رد
                  </a>
                </li>
              </ul>
            </div>
        </div>
    </div>
       ))}
</div>
 
  )
}

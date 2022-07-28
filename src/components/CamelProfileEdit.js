import React from 'react'
import logo from '../assets/img/logo.png';
import { HashLink } from 'react-router-hash-link';

export  function CamelProfileEdit() {
  return (
    <div class="container">
                    <br/> <br/> <br/>  <br/><br/> <br/> 
    <div class="row gutters">
    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
    <div class="card h-100">
        <div class="card-body">
            <div class="account-settings">
                <div class="user-profile">
                    <div class="user-avatar">
                        <img src={logo} alt="Maxwell Admin"/>
                    </div>
                    <h5 class="user-name">الاسم </h5>
                    <h6 class="user-email">yuki@Maxwell.com</h6>
                </div>
                <div class="about">
                    <h5 class="w3-text-teal">حول</h5>
                    <p>كلام كلام كلام .</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
    <div class="card h-100">
        <div class="card-body">
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mb-2 w3-text-teal">معلومات شخصيه </h6>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="fullName">الاسم </label>
                        <input type="text" class="form-control" id="fullName" placeholder="ادخل اسم الجمل " />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="eMail">النسب</label>
                        <input type="text" class="form-control" id="eMail" placeholder="ادخل النسب"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="phone">المدرب</label>
                        <input type="text" class="form-control" id="phone" placeholder="ادخل المدرب"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="phone">سعر العينه </label>
                        <input type="text" class="form-control" id="phone" placeholder="ادخل السعر"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
     
                </div>
            </div>
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mt-3 mb-2 w3-text-teal">العنوان</h6>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="Street">الشارع</label>
                        <input type="name" class="form-control" id="Street" placeholder="ادخل الشارع"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="ciTy">المدينه</label>
                        <input type="name" class="form-control" id="ciTy" placeholder="اكدخل المدينه"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="zIp">Zip Code</label>
                        <input type="text" class="form-control" id="zIp" placeholder="Zip Code"/>
                    </div>
                </div>
            </div>
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <h6 class="mt-3 mb-2 w3-text-teal">حول</h6>
                </div>
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="form-group">
                        <label for="Street">نبذه</label>
                        <textarea type="name" class="form-control" id="Street" placeholder=""/>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right">
                        <HashLink to='/myCamels'>
                        <button type="button" id="submit" name="submit" class="button-profile ">الغاء</button>
                        </HashLink>  
                        <HashLink to='/myCamels'>
                        <button type="button" id="submit" name="submit" class="button-profile">حفظ</button>
                    </HashLink>    
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>

  )
}

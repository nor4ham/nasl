import React from 'react'
import { HashLink } from 'react-router-hash-link';

export  function MyProfile() {
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
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin"/>
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
                        <label for="fullName">الاسم الكامل</label>
                        <input disabled type="text" class="form-control" id="fullName" placeholder="ادخل اسمك " />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="eMail">البريد الالكتروني</label>
                        <input  disabled type="email" class="form-control" id="eMail" placeholder="ادخل البريد الالكتروني"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="phone">رقم الجوال</label>
                        <input disabled type="text" class="form-control" id="phone" placeholder="ادخل رقم جوالك"/>
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
                        <input disabled type="name" class="form-control" id="Street" placeholder="ادخل الشارع"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="ciTy">المدينه</label>
                        <input disabled type="name" class="form-control" id="ciTy" placeholder="اكدخل المدينه"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="form-group">
                        <label for="zIp">Zip Code</label>
                        <input disabled type="text" class="form-control" id="zIp" placeholder="Zip Code"/>
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
                        <textarea disabled type="name" class="form-control" id="Street" placeholder=""/>
                    </div>
                </div>
            </div>
            <br/>
            <div class="row gutters">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="text-right">
					<HashLink to='edit'>
                        <button type="button" id="submit" name="submit" class="button-profile ">تعديل</button>
					</HashLink>
                    <HashLink to='add'>
                        <button type="button" id="submit" name="submit" class="button-profile ">اضافة</button>
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

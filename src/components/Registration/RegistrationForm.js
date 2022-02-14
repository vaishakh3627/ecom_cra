import React, { useEffect, useState } from "react";

import { EMAIL, OTP } from "./constants";

const RegistrationForm = props => {

    console.log(props)
    return (
        <Wrapper>
            <Heading />
            {
                props.form === EMAIL ?
                    <FormEmail {...props} /> :
                    <FormOtp {...props} />
            }
        </Wrapper>
    );
}


export default RegistrationForm

const Wrapper = props =>
    <div className="col-lg-6 col-md-8">
        <div className="login_wrap widget-taber-content background-white">
            <div className="padding_eight_all bg-white">
                {props.children}
            </div>
        </div>
    </div>

const Heading = () =>
    <div className="heading_s1">
        <h1 className="mb-5">Create an Account</h1>
        <p className="mb-30">Already have an account? <a href="/login">Login</a></p>
    </div>

const FormEmail = props => {

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false)
    const [check, setCheck] = useState(false)

    const onSubmit = e => {

        e.preventDefault();
        if(isSubmit === true && check === true) {
            props.setForm(OTP)
        }else {
            alert('Invalid Email')
        }
    }

    const handleChange = (e) => {
        setEmail(e.target.value);

        if(regex.test(email) === false){
            setError('Invalid Email')
        }else {
            setError('');
            setIsSubmit(true)
            return true;
        }
    }

    const handleCheckbox = (e) => {
        setCheck(true);
    }


    return (
        <form>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    value={email}
                    type="text"
                    required=""
                    placeholder="Email" />
                <p className="text-danger p-2 m-2">{error}</p>
            </div>
            <div className="login_footer form-group mb-50">
                <div className="chek-form">
                    <div className="custome-checkbox">
                        <input onClick={handleCheckbox} className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" value="" />
                        <label className="form-check-label" htmlFor="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                    </div>
                </div>
                <a href="page-privacy-policy.html"><i className="fi-rs-book-alt mr-5 text-muted"></i>Lean more</a>
            </div>
            <div className="form-group mb-30">
                <button onClick={onSubmit} className="btn btn-fill-out btn-block hover-up font-weight-bold">Submit</button>
            </div>
            <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
        </form>
    );
}

const FormOtp = props => {

    const [otp, setOtp] = useState('')

    const onSubmit = (e) => {

        e.preventDefault();
    }

    return (
        <form>
            <h6 className="mb-20">An OTP has been successfully sent to your mail address: {props.userData.email || `abc@xyz.com`}</h6>
            <div className="form-group">
                <input
                    onChange={e => setOtp(e.target.value)}
                    value={otp}
                    type="text"
                    required=""
                    placeholder="OTP" />
            </div>
            <div className="form-group mb-30">
                <button onClick={onSubmit} className="btn btn-fill-out btn-block hover-up font-weight-bold">Submit</button>
            </div>
        </form>
    );
}
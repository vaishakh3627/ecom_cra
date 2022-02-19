import React, { useEffect, useState } from "react";
import { Button, Modal, Collapse } from "react-bootstrap";

import { _validateEmail } from "../../common/validators/inputValidators";
import { sendEmalOtp } from "./api";

import { EMAIL, OTP } from "./constants";

const SignupForm = props => {

    const [component, setComponent] = useState(EMAIL)
    const [signupData, setSignupData] = useState({
        [EMAIL]: '',
        [OTP]: ''
    })
    const updateSignupData = data =>
        setSignupData(previousState => ({
            ...previousState,
            ...data
        }))

    const [valid, setValid] = useState({
        [EMAIL]: false,
        [OTP]: false
    })
    const updateValid = data =>
        setValid(previousState => ({
            ...previousState,
            ...data
        }))

    const Heading = () =>
        <div className="heading_s1">
            <h1 className="mb-5">Create an Account</h1>
            <p className="mb-30">Already have an account? <a href="/login">Signin</a></p>
        </div>

    const onSubmit = () => console.log("account created")

    const renderComponent = {
        [EMAIL]: <FormEmail
            data={signupData[EMAIL]}
            setData={updateSignupData}
            setComponent={setComponent}
            valid={signupData[EMAIL] === '' || valid[EMAIL]} />,
        [OTP]: <FormOtp
            email={signupData[EMAIL]}
            data={signupData[OTP]}
            setData={updateSignupData}
            valid={signupData[OTP] === '' || valid[OTP]}
            onSubmit={onSubmit} />,
    }

    useEffect(() => {
        updateValid({
            [EMAIL]: _validateEmail(signupData[EMAIL])
        })
    }, [signupData[EMAIL]])

    return (
        <div className="col-lg-6 col-md-8">
            <div className="login_wrap widget-taber-content background-white">
                <div className="padding_eight_all bg-white">
                    <Heading />
                    {
                        renderComponent[component]
                    }
                </div>
            </div>
        </div >
    );
}


export default SignupForm

const FormEmail = ({
    data,
    setData,
    setComponent,
    valid
}) => {

    const [accepted, setAccepted] = useState(false)
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault()
        // setComponent(OTP)
        sendEmalOtp({ to: data })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        console.log(data)
    }

    const toggleShow = (e) => {

        e.preventDefault()
        setShow(true)
    }

    return (
        <>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Policy</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Your personal data will be used to support your
                    experience throughout this website, to manage access
                    to your account, and for other purposes described in
                    our privacy policy
                </Modal.Body>
                <Modal.Footer>
                    <button
                        onClick={() => setShow(false)}
                        className="btn btn-fill-out btn-block hover-up font-weight-bold">
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
            <form>
                <div className="form-group">
                    <input
                        value={data}
                        onChange={(e) => setData({ [EMAIL]: e.target.value })}
                        type="text"
                        required=""
                        placeholder="Email" />
                    <Collapse in={!valid}>
                        <p className="text-danger p-2 m-2">Invalid email</p>
                    </Collapse>
                </div>
                <div className="login_footer form-group mb-50">
                    <div className="chek-form">
                        <div className="custome-checkbox">
                            <input checked={accepted} onChange={() => setAccepted(!accepted)} className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox12" />
                            <label className="form-check-label" htmlFor="exampleCheckbox12"><span>I agree to terms &amp; Policy.</span></label>
                        </div>
                    </div>
                    <a href="" onClick={toggleShow}><i className="fi-rs-book-alt mr-5 text-muted"></i>Lean more</a>
                </div>
                <div className="form-group mb-30">
                    <button disabled={!(accepted && valid)} onClick={handleSubmit} className="btn btn-fill-out btn-block hover-up font-weight-bold">Submit</button>
                </div>
                <p className="font-xs text-muted"><strong>Note:</strong>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy</p>
            </form></>
    );
}

const FormOtp = ({
    email,
    otp,
    setOtp,
    valid,
}) => {

    return (
        <form>
            <h6 className="mb-20">An OTP has been successfully sent to your mail address: {email || `abc@xyz.com`}</h6>
            <div className="form-group">
                <input
                    value="email"
                    type="text"
                    required=""
                    placeholder="OTP" />
            </div>
            <div className="form-group mb-30">
                <button onClick={() => console.log("HI")} className="btn btn-fill-out btn-block hover-up font-weight-bold">Submit</button>
            </div>
        </form>
    );
}
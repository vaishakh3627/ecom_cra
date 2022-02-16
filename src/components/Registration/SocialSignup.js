import React from "react";

const SocialSignup = () =>
    <div className="col-lg-6 pr-30 d-none d-lg-block">
        <div className="card-login mt-115">
            <a href="#" className="social-login facebook-login">
                <img src="./assets/imgs/theme/icons/logo-facebook.svg" alt="" />
                <span>Continue with Facebook</span>
            </a>
            <a href="#" className="social-login google-login">
                <img src="./assets/imgs/theme/icons/logo-google.svg" alt="" />
                <span>Continue with Google</span>
            </a>
            <a href="#" className="social-login apple-login">
                <img src="./assets/imgs/theme/icons/logo-apple.svg" alt="" />
                <span>Continue with Apple</span>
            </a>
        </div>
    </div>

export default SocialSignup
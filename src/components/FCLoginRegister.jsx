import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import FCLoginForm from "./FCLoginForm";
import FCRegisterForm from "./FCRegisterForm";
import { withRouter } from "react-router-dom";

function FCLoginRegister(props) {
  window.onload = function () {
    //localStorage.clear();
    if (!window.location.hash) {
      window.location = window.location + "#loaded";
      window.location.reload();
    }
  };

  /* الكةنست هاظ بشتغل على تخبئة الفورم تاع الريجيستريشن */
  /*اذا الستيت بصير ترو هاظ يعني انو احنا شايفين الريجيستريشن فورم حاليا*/
  const [registrationFormStatus, setRegistrationFormStatus] = useState(false);

  /*Animation*/
  /**/
  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0,
  });
  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500,
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 0px transparent"
      : "solid 2px #6a6a6b",
  });
  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
      ? "solid 2px #6a6a6b"
      : "solid 0px transparent",
  });

  /*عندما نضغط على الريجيستريشن, الستيت رح تتغير لترو */
  /*بعد ضغطه سوف نتمكن من رؤيةالريحتستريشن فورم*/
  function registerClicked() {
    //localStorage.clear();
    setRegistrationFormStatus(true);
  }

  /*عندما نضغط على اللوجين, الستيت رح تتغير لفولس */
  /*بعد ضغطه سوف نتمكن من رؤيةاللوجين فورم*/
  function loginClicked() {
    setRegistrationFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
      </div>

      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          {" "}
          <FCLoginForm handleLogin={props.handleLogin} />{" "}
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <FCRegisterForm SendNewUser={props.SendNewUser} />{" "}
        </animated.form>
      </div>
    </div>
  );
}

export default withRouter(FCLoginRegister);

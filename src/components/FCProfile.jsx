import React, { useState } from "react";
import Nav from "./Nav";
import { Button, TextField } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";

function FCProfile(props) {
  let userDetails = JSON.parse(localStorage.getItem("userDetails"));
  console.log(`11111111111222222222`, userDetails);
  const [UserName, setUserName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  function handelUserName(e) {
    setUserName(e.target.value);
    // console.log(`0000000000`, userDetails.UserName)
    // userDetails.UserName = e.target.value;
    // localStorage.setItem('userDetails', JSON.stringify(userDetails));
    console.log(UserName);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    console.log(Email);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
    console.log(Password);
  }
  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
    console.log(ConfirmPassword);
  }

  function handleDetails() {
    if (Password !== ConfirmPassword) {
      alert("Password Do Not Match");
      return;
    }
    let updatedDetails = {
      UserName: UserName,
      Email: Email,
      Password: Password,
      admin: false,
    };
    console.log(`old userDetails hereeeeeee`, userDetails);
    console.log(`new userDetails hereeeeeee`, updatedDetails);
    userDetails = updatedDetails;
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    console.log(
      `after updateing userDetails in localStorage hereeeeeee`,
      userDetails
    );
  }

  return (
    <center>
      <Nav />
      <nav className="nav-backg">
        <div>
          <h1>Your Profile</h1> <br />
          <br />
          <TextField
            id="outlined-basic"
            onChange={handelUserName}
            label="Change UserName"
            variant="outlined"
          />{" "}
          <WarningRoundedIcon fontSize="large" style={{ margin: 10 }} /> <br />
          <br />
          <TextField
            id="outlined-basic"
            onChange={handleEmail}
            label="Change UserName"
            variant="outlined"
          />{" "}
          <WarningRoundedIcon fontSize="large" style={{ margin: 10 }} /> <br />
          <br />
          <TextField
            id="outlined-basic"
            onChange={handlePassword}
            label="Change PassWord"
            variant="outlined"
          />{" "}
          <WarningRoundedIcon fontSize="large" style={{ margin: 10 }} /> <br />
          <br />
          <TextField
            id="outlined-basic"
            onChange={handleConfirmPassword}
            label="Confirm PassWord"
            variant="outlined"
          />{" "}
          <WarningRoundedIcon fontSize="large" style={{ margin: 10 }} /> <br />
          <br />
          <Button
            style={{ marginTop: 55 }}
            onClick={handleDetails}
            variant="outlined"
          >
            Make Changes
          </Button>
        </div>
      </nav>
    </center>
  );
}

export default withRouter(FCProfile);

// let Details = { UserName : UserName , Email : Email , Password : Password ,admin:false};
// console.log(Details);
// props.SendNewUser(Details);
// localStorage.setItem('userDetails' , JSON.stringify(Details));
// window.location.reload();

import React, { useState } from "react";
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import FCLoginRegister from "./FCLoginRegister";
import FCBookASeat from "./FCBookASeat";
import FCProfile from "./FCProfile";
import FCBooked from "./FCBooked";
import FCAdminBookedPage from "./FCAdminBookedPage";

function Main(props) {
  // const [loggedUser, setLoggedUser] = useState("");

  const [NewArrayOfDates, setarrayOfDates] = useState([]);

  const [UserDetails, setUserDetails] = useState([
    {
      UserName: "Admin",
      Email: "admin@gmail.com",
      Password: "1234",
      admin: true,
    },
  ]);

  const history = useHistory();
  function getNewUsr(e) {
    console.log("arrived new user");
    if (UserDetails.find((u) => u.Email === e.Email) !== undefined) {
      console.log("user exist already pick other Email");
    } else {
      let temp = UserDetails;
      temp.push(e);
      setUserDetails(temp);
    }
  }

  function GetscheduleOfDates(e) {
    console.log("Main Page =====>", e);
    let selectedDate =e.selectedDate;
    let selectedTime =e.selectedTime;
    let selectedlibrary =e.selectedLibrary;
    let schedule = { selectedlibrary, selectedDate, selectedTime };
    NewArrayOfDates.push(schedule);
    localStorage.setItem("ArrayOfDates", JSON.stringify(NewArrayOfDates));
    const ArrayOfDates1 = JSON.parse(localStorage.getItem("ArrayOfDates"));
    console.log("function GetscheduleOfDates  =========>", ArrayOfDates1);
  }
  
  const handleLogin = (email, password) => {
    const Data = JSON.parse(localStorage.getItem("userDetails"));
    console.log(Data.Email);
    console.log(Data.Password);
    if (Data.Email === email && Data.Password === password) {
      console.log("Okaaay");
      history.push("/booking");
    } else {
      alert(`Email or Password is Incorrect`);
    }
  };
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <FCLoginRegister
              handleLogin={handleLogin}
              SendNewUser={getNewUsr}
            />
          )}
        />
        <Route
          path="/booking"
          render={() => (
            <FCBookASeat SendscheduleOfDates={GetscheduleOfDates} />
          )}
        />
        <Route path="/profile" render={() => <FCProfile />} />
        <Route path="/booked" render={() => <FCBooked />} />
        <Route path="/adminbooked" render={() => <FCAdminBookedPage />} />
      </Switch>
    </div>
  );
}

export default withRouter(Main);

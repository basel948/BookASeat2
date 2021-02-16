import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import Nav from "./Nav";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { withRouter, useHistory } from "react-router-dom";

// function localStorageFunc(){
//   const Data = JSON.parse(localStorage.getItem('userDetails'));
//   console.log(Data)
// }

function FCBookASeat(props) {
  // useEffect(() => {
  //   const Data = JSON.parse(localStorage.getItem("userDetails"));
  //   console.log(Data);
  // });

  const [selectedLibrary , setSelectedLibrary] = useState(); 

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedTime, setSelectedTime] = useState();

  const [arrayOfDates, setarrayOfDates] = useState([]);

  const handleDateChange = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const history = useHistory();

  function addToArrayOfBooking() {
    // let scheduleOfDates = { selectedDate };
    // let scheduleOfTimes = { selectedTime };
    const Data = JSON.parse(localStorage.getItem("userDetails"));
    let UserName = Data.UserName;
    console.log(`library =====>>` ,selectedLibrary)
    let schedule = { UserName, selectedLibrary, selectedDate, selectedTime };
    console.log(`qqqqqqqqqqq =====>>` ,schedule)
    props.SendscheduleOfDates(schedule);
    history.push("/booked");
  }

  return (
    <center>
      <Nav />
      <nav className="nav-backg">
        <div>
          <br />
          <br />
          <h1>Book A Seat In The Library</h1> <br />
          <form>
            <select value={selectedLibrary} onChange={(e) => {setSelectedLibrary(e.target.value)}}>
              <option >Choose Library</option>
              <option value="Main Library">Main Library</option>
              <option value="Secondary Library">Secondary Library</option>
            </select>

          </form>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>Enter Date & Time</h2>
          <br />
          <br />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                margin="small"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />

              <KeyboardTimePicker
                margin="small"
                id="time-picker"
                label="Time picker"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change time",
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Button
            style={{ marginTop: 55 }}
            variant="outlined"
            onClick={addToArrayOfBooking}
          >
            Click Here To Book
          </Button>
          <br /> <br />
        </div>
      </nav>
    </center>
  );
}

export default withRouter(FCBookASeat);

/*function sendData()
{
   props.abc123(count);
}*/

/*<input style={{backgroundColor:'red'}} type="button" value="Clcik Me Here" onClick={sendData}/>*/

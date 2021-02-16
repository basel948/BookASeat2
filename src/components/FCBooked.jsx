import React, { useState, useEffect } from "react";
// import Moment from "react-moment";
import Nav from "./Nav";
import { withRouter } from "react-router-dom";
import { Table } from "react-bootstrap";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";

function FCBooked() {
  const ArrayOfDates = JSON.parse(localStorage.getItem("ArrayOfDates"));
  console.log("FCBooked ===> ", ArrayOfDates);
  const [arrayOfDates, setarrayOfDates] = useState([]);

  function deleteDate(r) {
    let row = --r;
    console.log("Delete Func ===> ", ArrayOfDates[r]);
    //localStorage.clear();
    console.log(row);
    //console.log(ArrayOfDates[i].key);
    for (var i = 0; i < ArrayOfDates.length; i++) {
      if (i !== row) {
        console.log("IN FOR ===> ", i);
        let UserName = ArrayOfDates[i].UserName;
        let selectedLibrary = ArrayOfDates[i].selectedLibrary;
        let selectedDate = ArrayOfDates[i].selectedDate;
        let selectedTime = ArrayOfDates[i].selectedTime;
        let schedule = {
          UserName,
          selectedLibrary,
          selectedDate,
          selectedTime,
        };
        arrayOfDates.push(schedule);
      }
    }
    console.log("After For ====>", arrayOfDates);
    localStorage.setItem("ArrayOfDates", JSON.stringify(arrayOfDates));
    console.log("Delete Func FINISHED ===> ", ArrayOfDates);
    window.location.reload();
  }

  return (
    <center>
      <Nav />
      <div>
        <h1 className="nav-bar">Your Booked Schedule</h1>
        <Table striped variant="dark">
          <tbody>
            <tr style={{ fontWeight: "bold", color: "lighwhite" }}>
              <td>Number</td>
              <td>Library</td>
              <td>Date</td>
              <td>Time</td>
              <td>Approval</td>
              <td>Delete</td>
            </tr>
            {ArrayOfDates.map((item, i) => (
              <tr key={i} style={{ fontStyle: "italic" }}>
                <td>{++i}</td>
                <td>{item.selectedlibrary}</td>
                <td>{item.selectedDate.slice(0, 10)}</td>
                <td>{item.selectedTime}</td>
                <td>{"Appending"}</td>
                <td>
                  <button onClick={() => deleteDate(i)}>
                    <DeleteForeverTwoToneIcon />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </center>
  );
}

export default withRouter(FCBooked);

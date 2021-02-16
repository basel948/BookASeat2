import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-bootstrap'

// import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';


function FCAdminBookedPage(props) {
  const users = [
    { name: 'Basel', date: '11/02/2021', time: '10:00', approval: '' },
    { name: 'Atheer', date: '01/03/2021', time: '11:00', approval: '' },
    { name: 'mohamed', date: '15/05/2021', time: '14:00', approval: '' },
  ]

  const [Approval , setApprval] = useState('')

  function handleApproval(e){
    setApprval(e.target.value);
  }
  
  return (
    <center>
      <div>
        <h1>Your Booked Schedule</h1><br /><br /><br />
        <Table striped variant='dark'>
          <tbody>
            <tr style={{ fontWeight: 'bold', color: 'lighwhite' }}>
              <td>UserName</td>
              <td>Date</td>
              <td>Time</td>
              <td>Approval</td>
            </tr>
            {
              users.map((item, i) =>

                <tr key={i} style={{ fontStyle: 'italic' }}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                  <td>
                  <label style={{marginRight: 15}}>
                    Approve
                    <input style={{marginLeft: 10}} type="radio" value="Approved" onChange={handleApproval} />
                  </label>
                  <label>
                    Denied
                    <input style={{marginLeft: 10}} type="radio" value="Denied" onChange={handleApproval} />
                  </label>
                  </td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </div>
    </center>
  )
}

export default withRouter(FCAdminBookedPage) 

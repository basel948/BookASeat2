import React, { useState } from 'react';


export default function FCRegisterForm(props) {

    const [UserName , setUserName] = useState('');
    const [Email , setEmail] = useState('');
    const [Password , setPassword] = useState('');
    const [ConfirmPassword , setConfirmPassword] = useState('');

    function handelUserName(e){
        setUserName(e.target.value);
        console.log(UserName);
    }
    function handleEmail(e){
        setEmail(e.target.value);
        console.log(Email);
    }
    function handlePassword(e){
        setPassword(e.target.value);
        console.log(Password);
    }
    function handleConfirmPassword(e){
        setConfirmPassword(e.target.value);
        console.log(ConfirmPassword);
    }


    function handleDetails(){
        if(Password !== ConfirmPassword){
            alert("Password Do Not Match");
            return;
        }
        let Details = { UserName : UserName , Email : Email , Password : Password ,admin:false};
        console.log(Details);
        props.SendNewUser(Details);
        localStorage.setItem('userDetails' , JSON.stringify(Details));
        window.location.reload();
        }

    return (
        <form>
            <label htmlFor="fullname">UserName</label>
            <input type="text" onChange={handelUserName} id="fullname"/>
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} id="email"/>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={handlePassword} id="password"/>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input type="password" value={ConfirmPassword} onChange={handleConfirmPassword} id="confirmpassword"/>
            <input type="button" value="Register" className="submit" onClick={handleDetails}  />
        </form>
    )
}

import React, { useState } from 'react';


export default function FCLoginForm(props) {

    const [Email , setEmail] = useState('');
    const [Password , setPassword] = useState('');

    // React.useEffect(() => {
    //     localStorage.setItem('myValueInLocalStorage', value);
    //   }, [value]);

    function handleEmail(e){
        setEmail(e.target.value);
    }

    function handlePassword(e){
        setPassword(e.target.value);
    }

    // function handleLogin11(){
    //     const Data = JSON.parse(localStorage.getItem('userDetails'));
    //     console.log(Data)
    // } 

    return (
        /*كنت حاطت  فورم بدل الفريجمينت*/
        /*ولكن لاننا عرفنا الاشي بالأب.جي اس على انه فورم*/
        /*فلسنا بحاجه لتعريفه ك فورم مرة اخرى*/
        <React.Fragment>
            <label htmlFor='username'>Email</label>
            <input type="text" value={Email} onChange={handleEmail} id='username'/>
            <label htmlFor='password'>Password</label>
            <input type="password" value={Password} onChange={handlePassword} id='passwordLogin'/>
            <input type="button" value='Login' onClick={()=>props.handleLogin(Email,Password)} className='submit' />
        </React.Fragment> 
    )
}

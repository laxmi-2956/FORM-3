import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <App />
    </>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// import React, { useState } from 'react'
// const Form= () => {
//   const [name,setname]=useState('')
//   const [email,setemail]=useState('')
//   const [password,setpassword]=useState('')
//   const [city,setcity]=useState('')
//   const [gender,setgender]=useState('')


// const handleClick =(e)=>{
//   e.preventDefault();
//   const obj={
//     name:name,
//     email:email,
//     password:password,
//     city:city,
//     gender:gender
//   }
//   localStorage.setItem('employee',JSON.stringify(obj))
//   console.log(obj);
//   setname('');
//   setemail('');
//   setpassword('');
//   setcity('');
//   setgender('');

// }
//   return (
//     <>
//     <h1>
//       Form
//     </h1>
//     <form action="" onSubmit={handleClick}>
//       <input type="text" placeholder='enter your name ' value={name} onChange={(e)=>setname(e.target.value)}/><br />
//       <input type="email" placeholder='enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/><br />
//       <input type="password" placeholder='enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br />
//       <select name="" id=""  onChange={(e)=>setcity(e.target.value)}>
//         <option value="">city</option>
//         <option value="delhi">delhi</option>
//         <option value="surat">surat</option>
//         <option value="mumbai">mumbai</option>
//       </select><br/>
//       male <input type="radio" value={"male"} name="gender"   onChange={(e)=>{setgender(e.target.value)}}/>
//       female <input type="radio" value={"female"} name="gender"  onChange={(e)=>{setgender(e.target.value)}} /> <br />
 

//       <input type="submit" value="submit"/>
//     </form>
//     </>
//   )
// }

// export default Form




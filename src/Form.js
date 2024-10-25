import { useState } from "react"
import './Form.css'

function  Form()
{

    const [name , setname]=useState("")
    const [email,setemail]  =  useState ("")
    const [password ,setpassword ] = useState ("")
    const [gender,setgender] = useState ("")
    const [set,setmarried] = useState ("")
    const [city , setcity] = useState("")
 
    const handclick = (e) => {
        e.preventDefault();
        let student = {
            name: name,
            email: email,
            password: password,
            gender :gender,
            city : city,
            married : set,
            
        }
        localStorage.setItem('employee',JSON.stringify(student))
        console.log(student);
        setname('');
      
      };
    return(
     <>
            <div className="box1"></div>
      <div className="box2"></div>

      <div className="box"></div>
       <form action="" onSubmit={handclick} style={{fontSize : '20px' , color : 'white'}}>
         <h1 style={{ padding : '20px 0px'}}>FORM</h1>


         name : <input style={{ padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}} type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}  value={name}/>
        <br></br>
       
       Email : <input style={{ padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}} type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}  value={email}/>
        <br/>
       Password: <input style={{  padding : '6px 0px' , marginTop : '10px', marginRight : '26px' , fontSize : '20px'}} type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
       <br />
       male <input type="radio" value={"male"} name="gender"   onChange={(e)=>{setgender(e.target.value)}}/>
       female <input type="radio" value={"female"} name="gender"  onChange={(e)=>{setgender(e.target.value)}} /> <br />
 
     <br/>

        <select name="" id="" style={{padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}}  onChange={(e)=>setcity(e.target.value)}>
        <option value="">city</option>
        <option value="delhi">delhi</option>
        <option value="surat">surat</option>
        <option value="mumbai">mumbai</option>
      </select><br/>
        <br/>
        married : <input type="radio"  style={{padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}}  name="married" onChange={(e)=>setmarried(e.target.value)}  value={"married"}/>
        ismarried : <input type="radio" style={{padding : '6px 0px' , margin : '10px 0px' , fontSize : '20px'}} name="married" onChange={(e)=>setmarried(e.target.value)} value={"unmarried"} />    
             <br/>
        <button type="submit"  style={{padding : '6px 10px' , margin : '10px 0px' , fontSize : '20px'}} onClick={handclick}>Submit</button>
       </form>
   
     </>
    )
}
export default Form

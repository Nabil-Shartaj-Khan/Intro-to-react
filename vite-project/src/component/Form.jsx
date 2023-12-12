import { useState } from "react";


const Form = () => {


    let [formObj,setForm]=useState({fname:'Zlatan',age:'',city:'',gender:''});


    const whenInputChange=(property,value)=>{

        setForm(prevObj=>({
            ...prevObj, [property]:value
        }))

    }


    const formSubmit=(e)=>{
        e.preventDefault();
        console.log(formObj);

    }



    return ( 
        <>
            <h2>Please fill up the form!</h2>
            <form className="border border-2 text-center p-4" onSubmit={formSubmit}>
                <label>Name : </label>
                <input onChange={(e)=>{whenInputChange('fname',e.target.value)}} value={formObj.fname} type="text" placeholder="Your name" /><br /><br />

                <label>Age : </label>
                <input onChange={(e)=>{whenInputChange('age',e.target.value)}} value={formObj.age} type="number" placeholder="Your Age" /><br /><br />

                <label>City : </label>
                <select value={formObj.city} onChange={(e)=>{whenInputChange('city',e.target.value)}}>
                    <option value="">Choose city</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Ontario">Ontario</option>
                </select><br /><br />
                
                <label>Gender : </label> 
                <label htmlFor="male"> Male</label>
                <input onChange={()=>{whenInputChange('gender','male')}} checked={formObj.gender==="male"} type="radio" id="male" name="gender" value="male" />
                <label htmlFor="female">Female</label>
                <input onChange={()=>{whenInputChange('gender','female')}} checked={formObj.gender==="female"} type="radio" id="female" name="gender" value="female" /><br /><br />
                <button type="submit">Submit and check console log</button>
            </form>
        </>
    );
}
 
export default Form;
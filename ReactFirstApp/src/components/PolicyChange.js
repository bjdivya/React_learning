import { useState } from "react";
function PolicyChange(){
   const covName=['Divya','Nivya','siddu','Divya']
   const [isChecked, setIsChecked] = useState(false);

   const handleChange = (event) => {
     setIsChecked(event.target.checked);
   };
        return(
        <div className='covContainer'>
           {covName.map((name,index)=><div><input type='checkbox' id={index} name={name} className='covCheckBox' checked={isChecked}
          onChange={handleChange} ></input><label>{name}</label></div>)}  
        </div>
        )
    }
export default PolicyChange
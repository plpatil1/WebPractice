import React, {useState} from 'react';

const UseStateHookComp = () => {
    const [salary,setSalary] = useState(10000);
    const [myname, setMyName] = useState("Pawan");
    const [breakFast,setBreakFast] = useState(["rassaPohe","VadaPav", "Samosa", "Dosa"]);

   const salIncrement=()=>{
        setSalary(salary+500);
    }
    

    return (
        <div>
            <h2>This is useState Component</h2>
            <p>salary:{salary}</p>
            <button type='button' onClick={()=>{salIncrement()}}>salary++</button>
            <button type='button' onClick={()=> setSalary(salary+500)}>salary++</button>

            <hr />

            <p>My Name : {myname}</p>

            
            <button type='button' onClick={()=>setMyName("Plpatil")}>changeName</button>
            
            <hr/>

            <ul>
                {breakFast.map((val,index)=>{
                  return  <li key={index}> {val} </li>
                })}
            </ul>
        </div>
    )
}

export default UseStateHookComp

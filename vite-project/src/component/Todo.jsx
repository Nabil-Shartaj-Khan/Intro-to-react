import React from 'react';
import { useState } from 'react';

const Todo = () => {


    const [list,setList]=useState([])
    const [item,setItem]=useState('')


    const addToList=()=>{

        list.push(item);

        setList([...list]);
    }

    const removeData=(i)=>{
        list.splice(i,1)
        setList([...list]);
    }   



    return (


        <div>
        <>
            <table>
                <tbody>
                    {
                            list.length!==0?(

                                list.map((e,i)=>{
                                    return(
                                        <tr>
                                        <td>{e}</td>
                                        <td><button onClick={()=>{removeData(i)}}>Remove this task</button></td>
                                        </tr>
                                        
                                        
                                    )
                                })

                            ):(<tr></tr>)
                    }
                    
                        
                    
                </tbody>
            </table>
            
            <input onChange={(e)=>setItem(e.target.value)} placeholder='Add your items here'></input>
            <button onClick={addToList}>Add your work list</button>
            </> 
        </div>
    );
};

export default Todo;
import { useEffect, useState } from "react";
import { useRef } from "react";

import {toast, ToastContainer} from "react-toastify";

function TaskPage()
{
    let [t,st]=useState("");
    let[tt,stt]=useState([]);

    let [ei,sei]=useState(null);
    let [et,set]=useState("");

    let [rt,srt] = useState("");
    const reltask = useRef(new Set());
    const ttref = useRef([]);

    useEffect(()=>{
        loadtask();
    },[]);

    useEffect(()=>{
        ttref.current= tt;
    },[tt]);

    useEffect(()=>{
        const interval = setInterval(()=>{
            const now = new Date();
            ttref.current.forEach((item)=>{
                if (
                    item.reminderTime &&
                    new Date(item.reminderTime)<= now && 
                    !reltask.current.has(item._id)
                ) {
                    toast(`reminder : ${item.task}`);
                    localStorage.setItem(item._id, "done");
                    reltask.current.add(item._id);
                }
            })
        }, 1000)
        return()=> clearInterval(interval);
    },[]);

    
    const loadtask = async()=>{
        let res= await fetch("http://localhost:3000/todo")
        let data = await res.json()
        stt(data)

        const fired = new Set(
            data.filter(i=> localStorage.getItem(i._id)).map(i=> i._id)
        );
        reltask.current= fired;
    }

    const addtodo=async()=>{
        if(t.trim()==""){
            alert("enter a task")
            return;
        }
        await fetch("http://localhost:3000/todo",{
            method: "post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({task:t, reminderTime:rt})
        });
        loadtask();
        st("");
        srt("");
    }

    const deletebtn= async(d)=>
    {
        await fetch(`http://localhost:3000/todo/${d}`,{
            method:"delete"
        })
        localStorage.removeItem(d);
        loadtask();

    }

    const startedit = (item)=>{
        sei(item._id);
        set(item.task);
    }

    const updatetext = async()=>{
        await fetch(`http://localhost:3000/todo/${ei}`,{
            method:"put",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({task:et})
        });
        sei(null);
        set("");
        loadtask();
    };
    return(
    <div className="task">
        <ToastContainer/>
        <h1>hello welcome to taskpage</h1>
        <input type="text" placeholder="enter text"
        onChange={(e)=>{
            st(e.target.value)
        }}value={t}/>
        <input type="datetime-local" value={rt} 
        onChange={(e)=>{srt(e.target.value)}}/>
        <button onClick={addtodo}>add task</button>
        
        {tt.map((item,index)=>(
            <div className="taskbox" key={item._id}>
                {ei===item._id?(
                    <div className="ou">
                    <input value={et}
                    onChange={(e)=>set(e.target.value)}/>
                    <button 
                    onClick={updatetext}>
                        save
                        </button>
                    <button 
                    onClick={()=>sei(null)}>
                        cancel
                        </button>
                    </div>
                ):(
                    <>
                        <h2>{item.task}</h2>
                        <p>reminder: {item.reminderTime ? new Date(item.reminderTime).toLocaleString(): "not set"}</p>
                        <button 
                        onClick={()=> startedit(item)}>
                            edit
                            </button>
                        <button 
                        onClick={()=> deletebtn(item._id)}>
                            delete
                            </button>
                    </>

                )
                }
            </div>
        ))}
    </div>
    )
}
export default TaskPage;
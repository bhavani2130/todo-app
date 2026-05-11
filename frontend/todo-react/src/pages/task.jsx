import { useEffect, useState } from "react";

function TaskPage()
{
    let [t,st]=useState("");
    let[tt,stt]=useState([]);

    let [ei,sei]=useState(null);
    let [et,set]=useState("");

    function addtask()
    {
        if(t.trim()==""){
            alert("enter task")
            return ;
        }
        stt([...tt,t])
        st("")
    }
    useEffect(()=>{
        loadtask();
    },[]);


    const loadtask = async()=>{
        let res= await fetch("http://localhost:3000/todo")
        let data = await res.json()
        stt(data)
    }
    function delbtn(d){
        let nt=tt.filter((item,index)=>index!==d)
        stt(nt)
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
            body:JSON.stringify({task:t})
        });
        loadtask();
        st("");
    }

    const deletebtn= async(d)=>
    {
        await fetch(`http://localhost:3000/todo/${d}`,{
            method:"delete"
        })
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
        <h1>hello welcome to taskpage</h1>
        <input type="text" placeholder="enter text"
        onChange={(e)=>{
            st(e.target.value)
        }}value={t}/>
        <button onClick={addtodo}>add task</button>
        
        {tt.map((item,index)=>(
            <div key={item._id}>
                {ei===item._id?(
                    <div className="ou">
                    <input value={et}
                    onChange={(e)=>set(e.target.value)}/>
                    <button onClick={updatetext}>save</button>
                    <button onClick={()=>sei(null)}>cancel</button>
                    </div>
                ):(
                    <>
                        <h2>{item.task}</h2>
                        <button onClick={()=> startedit(item)}>edit</button>
                        <button onClick={()=> deletebtn(item._id)}>delete</button>
                    </>

                )
                }
            </div>
        ))}
    </div>
    )
}
export default TaskPage;
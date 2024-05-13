import { useState } from "react";
import { Column } from "./column";


export function JiraBoard() {
    const[newticket,setNewTicket]=useState("");
    const [toDoData,setToDoData]=useState([]);
    const[inProgressData,setInProgressData]=useState([]);
    const[completeData,setCompleteData]=useState([])

    function handleAddNewTicket(){
        if(newticket.trim!==""){
            setToDoData([...toDoData,newticket])
            setNewTicket("")
        }
    }

    function handleDrop(e,tragetCol){
    console.log('e-drop',e);
    const task= e.dataTransfer.getData("task")
    const sourceCol= e.dataTransfer.getData("sourceCol")
    console.log('tsk-col',task,sourceCol,tragetCol);
    if(tragetCol!==sourceCol){
        switch(tragetCol){
            case "TODO":
                setToDoData([...toDoData,task]);
                break;
                case "Inprogress":
                    setInProgressData([...inProgressData,task]);
                    break;
                    case "Done":
                        setCompleteData([...completeData,task]);
                        break;
            default:
                break;
        }
    
            switch(sourceCol){
                case "TODO":
                    setToDoData(toDoData.filter((t)=>{if(t!==task){return [...t]}}));
                    break;

                    case "Inprogress":
                    setInProgressData(inProgressData.filter((t)=>t!==task));

                    break;
                    case "Done":
                        setCompleteData(completeData.filter((t)=>t!==task));
                    break;
                default:
                    break;

            }
        }
}


    function handleDrag(e,task,sourceCol){
        console.log('drag',e);
    e.dataTransfer.setData("task",task)
    e.dataTransfer.setData("sourceCol",sourceCol)
    }

    console.log('toDoData',toDoData);

  return <div>
    <h1 className="my-[1rem]">Jira Board</h1>
    <div className="w-full gap-[1rem] flex justify-center" >

    <input 
    className="h-[4rem] w-[50%] p-[1rem] text-[1.4rem]"
     type="search" value={newticket}onChange={(e)=>{
    setNewTicket(e.target.value)
    }}
    onKeyDown={(key)=>{console.log('k',key);
        key.code==="Enter" && handleAddNewTicket()
    }}
    placeholder="Enter text"
    />
    <button onClick={handleAddNewTicket} className="text-[1.4rem]">Add New Ticket</button>
    </div>

    <div className="flex flex-row justify-center w-screen gap-[1rem] ">
    <Column title="TODO" task={toDoData} onDrop={(e)=>handleDrop(e,"TODO")} onDrag={handleDrag}/>
    <Column title="Inprogress" task={inProgressData}  onDrop={(e)=>handleDrop(e,"Inprogress")} onDrag={handleDrag}/>
    <Column title="Done" task={completeData}  onDrop={(e)=>handleDrop(e,"Done")} onDrag={handleDrag}/>
    </div>
  </div>;
}

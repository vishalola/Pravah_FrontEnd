import {AiOutlineUser,AiOutlineUserAdd} from 'react-icons/ai'
import { useState } from 'react'
import CustomAutoComplete from './customAuto';
import axios from 'axios';
export default function Item(props){
    const [assignBox,setAssignBox] = useState(false);
    const [completed,setCompleted] = useState(props.isCompleted);
    const [isAssigned,setIsAssigned] = useState(props.isAssigned);
    const [assigned,setAssigned] = useState(props.assigned);
    return(
        <div className='flex gap-2 min-w-[400px] outlin p-3 items-center justify-between'>
            <div className='flex gap-3 items-center justify-center'>
                <div onClick={()=>{
                    
                        if(!completed)
                        {
                            axios.post("http://localhost:5001/task/update",{
                                "projectID":props.projectID, 
                                "nodeID":props.nodeID,
                                "taskID":props.taskID,
                                "isCompleted":true,
                            },{ headers: { Authorization:localStorage.getItem('jwtToken') } }).then(res=>{
                                
                                props.setTasksDone(task=>++task);
                                setCompleted(true);

                            }).catch(e=>{
                                console.log(e);
                            })
                        }
                        else
                        {
                            axios.post("http://localhost:5001/task/update",{
                                "projectID":props.projectID, 
                                "nodeID":props.nodeID,
                                "taskID":props.taskID,
                                "isCompleted":false,
                            },{ headers: { Authorization:localStorage.getItem('jwtToken') } }).then(res=>{
                                
                                props.setTasksDone(task=>--task);
                                setCompleted(false);

                            }).catch(e=>{
                                console.log(e);
                            })
                        }

                    }} className={`min-h-[15px] cursor-pointer ${completed?"bg-blue-500":"outline"} transition-all min-w-[15px]`}>

                </div>
                <div className={`outlin transition-all ${completed?"line-through opacity-50":""} text-sm`}>
                    {props.task}
                </div> 
            </div>
            <div className='min-w-fit relative outlin flex  gap-1 items-center justify-center'>
                {!isAssigned && 
                    <div onClick={()=>setAssignBox(true)} className='cursor-pointer text-xl'>
                        <AiOutlineUserAdd/>
                    </div>
                }
                {assignBox && 
                    <CustomAutoComplete team={props.team}  nodeID={props.nodeID} projectID={props.projectID} taskID={props.taskID}  close={setAssignBox} isAssigned={setIsAssigned} setAssigned={setAssigned} />
                }
                {isAssigned &&
                    <div className='flex gap-1 items-center'>
                        <AiOutlineUser/>
                     {assigned}
                    </div>
                }
            </div>
        </div>
    )
}
import {AiOutlineUser,AiOutlineUserAdd} from 'react-icons/ai'
import { useState } from 'react'
import CustomAutoComplete from './customAuto';
export default function Item(props){
    const [assignBox,setAssignBox] = useState(false);
    const [completed,setCompleted] = useState(props.isCompleted);
    const [isAssigned,setIsAssigned] = useState(false);
    const [assigned,setAssigned] = useState('');

    return(
        <div className='flex gap-2 min-w-[400px] outlin p-3 items-center justify-between'>
            <div className='flex gap-3 items-center justify-center'>
                <div onClick={()=>{
                    
                    if(!completed)
                        props.setTasksDone(task=>++task);
                    else
                        props.setTasksDone(task=>--task);

                    setCompleted(!completed)
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
                    <CustomAutoComplete close={setAssignBox} isAssigned={setIsAssigned} setAssigned={setAssigned}/>
                }
                {isAssigned &&
                    <div>
                     {assigned}
                    </div>
                }
            </div>
        </div>
    )
}
import {LiaFolderOpen} from 'react-icons/lia'
import { useState } from 'react'
export default function TaskItem(props){
    let [completed,setCompleted] = useState(false);
    return(
        <div className='cursor-pointer outlin rounded-xl bg-blue-600 my-2 p-4 flex gap-3 justify-between'>
            <div className='
                flex outlie w-fit items-center justify-center gap-4'>
                <div onClick={(e)=>{
                        if(completed)
                        {
                            props.assigned(val=>val+1);
                            props.completed(val=>val-1);
                        }
                        else
                        {
                            props.assigned(val=>val-1);
                            props.completed(val=>val+1);
                        }
                        setCompleted(!completed);
                        e.target.classList.toggle("bg-white")}} 
                    className='outline transition-all cursor-pointer min-h-[15px] min-w-[15px]'>

                </div>
                <div  className={`${completed?'line-through opacity-50':''}`}>
                    {props.task}
                </div>
            </div>
            <div className='min-w-fit flex outlin items-center justify-center gap-2'>
                <div className='text-xl outlin'>
                    <LiaFolderOpen/>
                </div>
                <div className='outlin min-w-fit'>
                    {props.project}
                </div>
            </div>
        </div>
    )
}
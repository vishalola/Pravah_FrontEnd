import {TbSubtask} from 'react-icons/tb'
import Item from './item.js'
import {useEffect, useState} from 'react'
import {RiAddCircleLine} from 'react-icons/ri'
export default function Tasks(props){

    const[vis,setVis] = useState(false);
    const [task,setTask] = useState('');
    const [taskList,setTaskList] = useState([]);

    let handleTaskAdd = (e)=>{
        e.preventDefault();
        if(task!=='')
        {
            setTaskList(list=>[...list,<Item task={task} assigned="Unassigned"/>])
        }
    }
    return (
        <div className="outlin relative flex justify-center items-center ">
            <div onClick={()=>setVis(!vis)} className='text-4xl text-gray-400 hover:text-black cursor-pointer'>
                <TbSubtask/>
            </div>
           {vis &&  <div className='outlin px-4 absolute left-[100%] top-0 ' >
                <div className=' flex flex-col rounded-lg shadow-xl  bg-white p-4 '>
                    <form onSubmit={handleTaskAdd} className='flex min-w-[400px] justify-evenly outlin items-center my-3 gap-3 w-full'>
                            {/* <TextField  onChange={(e)=>setTask(e.target.value)} required className='nodrag ' label="add task" variant='outlined'/> */}
                            <input onChange={(e)=>setTask(e.target.value)} required placeholder='add task'  className='nodrag placeholder:opacity-50 placeholder:text-black   placeholder:font-light px-3 py-2 border-[1px] w-full outline-none bg-inherit' type="text" />
                            {/* <FreeSolo assigned={setAssigned}/> */}
                            {/* <input required placeholder='assign user'  className='h-full placeholder:opacity-50 placeholder:text-black  placeholder:font-light px-2 py-1 border-[1px] w-[120px] outline-none bg-inherit ' type="text" /> */}
                        <button type='submit' className='bg-blue-700 text-white text-4xl rounded-full flex justify-center items-center'>
                            <RiAddCircleLine/>
                        </button>
                    </form>
                    <div className='bg-[#ebebebb5] rounded-lg px-2  text-black '>
                        {taskList}
                    </div>
                </div>
            </div>}

        </div>
    )
}
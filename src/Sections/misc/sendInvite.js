import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
import { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
export default function SendInvite(props){

    let [userName,setUserName] = useState('');
    let [role,setRole] = useState('');
    let location = useLocation();
    let handleSubmit = (e)=>{
        e.preventDefault();

        axios.post("http://localhost:5001/invite/send"+location.pathname,{
            "toInvite":userName.trim(),
            "role":role.trim()
        },{ headers: { Authorization:localStorage.getItem('jwtToken') } }).then(res=>{
            props.setInviteVis(false)
        }).catch(e=>{
            console.log(e);

        })
    }
    return (
        <div className={`absolute
        ${props.vis?"scale-100":"scale-0"}
        transition-all
        w-[400px]
        shadow-lg rounded-lg
        bg-white
        px-3 py-8
        `}>
            <div className="text-blue-700 flex justify-between px-3 text-2xl">
                Add to Team
                <div onClick={()=>props.setInviteVis(false)} className='flex items-center cursor-pointer '>
                    <RxCross1/>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-4 justify-center items-center outlin px-4 mt-4">
                <input onChange={(e)=>setUserName(e.target.value)} required pattern="[' ']*[^' ']+[' ']*" className="outline-none w-1/2 border-b-2 border-blue-700 px-2 py-1 " placeholder="username" type="text" />
                <input onChange={(e)=>setRole(e.target.value)} required className=" outline-none w-1/2 border-b-2 border-blue-700 px-2 py-1 " placeholder="role" type="text" />
                <button type='submit' className="flex justify-center items-center rounded-full p-[5px] cursor-pointer bg-blue-700 text-white text-2xl ml-4 ">
                    <AiOutlineUsergroupAdd/>
                </button>
            </form>
        </div>
    )
}
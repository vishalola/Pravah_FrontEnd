import { useState,useRef } from "react";
import {AiOutlineUserAdd,AiOutlineClose} from 'react-icons/ai'

export default function CustomAutoComplete(props){

    let [isSelected,setIsSelected] = useState(false);
    let [selected,setSelected] = useState('');
    let [userDivs,setUserDivs]=useState([]);
    let inputRef = useRef(null);
    let users = ["Vishal Ola","Sahil Yadav","Pavitra Pandey"];

    let handleChange = e=>{
        setIsSelected(false);
        setSelected('');
        let input = e.target.value;
        setUserDivs([]);
        for(let i=0;i<users.length;i++)
        {
            if(users[i].toLowerCase().includes(input.toLowerCase()))
            {
                setUserDivs(list=>[...list,<div key={i} onClick={(e)=>{
                    setIsSelected(true);
                    setSelected(e.target.innerHTML);
                    inputRef.current.value = e.target.innerHTML;
                }} className="transition-all cursor-pointer px-6 py-3 hover:bg-blue-700 hover:text-white">{users[i]}</div>])
            }
        }
    }
    let handleAdd = ()=>{
        if(isSelected)
        {
            props.isAssigned(true);
            props.setAssigned(selected);
            props.close(false);
        }
    }
    return(
        <div className="z-10 shadow-xl absolute py-3 rounded-xl bg-white w-[240px]">
            <div className="flex outlin px-4">
                <input ref={inputRef} onChange={handleChange} className="nodrag outline-none bg-inherit w-full placeholder:italic  p-2 " placeholder="search user" type="text"/>
                <div onClick={handleAdd} className="outlin rounded-xl text-green-600 hover:bg-slate-100 transition-all cursor-pointer px-2 ml-2 flex items-center justify-center text-2xl">
                    <AiOutlineUserAdd/>
                </div>
                <div onClick={()=>props.close(false)} className="outlin rounded-xl bg-white hover:bg-slate-100 text-red-500 transition-all cursor-pointer px-2 ml-2 flex items-center justify-center text-2xl">
                    <AiOutlineClose/>
                </div>

            </div>
            {!isSelected && 
                <div className="outlin overflow-clip rounded-xl absolute top-full mt-2 w-full bg-white  shadow-lg flex flex-col ">
                    {userDivs}
                </div>
            }
        </div>
    )
}
import Editable from "./Editable"
import Description from "./Description"
import { useEffect, useRef,useState } from "react"
// import Tasks from "./Tasks";
import Tasks from "./Tasks_v2";
import ColorPalette from "./colorPalette";
export default function Node(props){
    let [isActive,setIsActive] = useState(true); 
    let [title,setTitle] = useState(props.title);
    let [desc,setDesc] = useState(props.desc);
    let [color,setColor] = useState('white');
    let [hov,setHov] = useState(false);
    return (
        <div
        onMouseLeave={()=>{
            setHov(false);
        }}
        onMouseEnter={()=>{
            setHov(true)
        }}
        className="outlin relative flex items-center justify-end outlin w-fit">
            
            {hov && <ColorPalette color={setColor}/>}
            <div className={`
            outlin
            m-2 min-h-[50px] min-w-[150px] inline-block
            p-4
            shadow-lg
            rounded-md
            ${isActive?"opacity-100":"opacity-60"}
            ${color==="white"?"bg-red-500 text-white":""}
            ${color==="yellow"?"bg-yellow-300":""}
            ${color==="red"?"bg-red-500 text-white":""}
            ${color==="green"?"bg-green-400":""}
            `}>
                <Editable content={setTitle} title={props.title} placeholder="Title" fontSize={20} maxWidth={150}/>
                <Description changeDesc={setDesc} desc={props.desc} maxWidth={150}/>
            </div>
            <div className="absolute left-[100%] top-1">
                <Tasks tasks={props.tasks} setActive={setIsActive}/>
            </div>
        </div>
    )
}
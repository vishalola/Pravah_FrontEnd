import Editable from "./Editable"
import Description from "./Description"
import { useRef,useState } from "react"
// import Tasks from "./Tasks";
import Tasks from "./Tasks_v2";
import ColorPalette from "./colorPalette";
export default function Node(){
    let [title,setTitle] = useState('');
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
            
            m-2 min-h-[50px] min-w-[150px] inline-block
            p-4
            shadow-lg
            rounded-md
            ${color==="white"?"bg-white":""}
            ${color==="yellow"?"bg-yellow-300":""}
            ${color==="red"?"bg-red-500 text-white":""}
            ${color==="green"?"bg-green-400":""}
            `}>
                <Editable content={setTitle} placeholder="Title" fontSize={20} maxWidth={150}/>
                <Description maxWidth={150}/>
            </div>
            <div className="absolute left-[100%] top-1">
                <Tasks/>
            </div>
        </div>
    )
}
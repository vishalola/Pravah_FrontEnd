export default function ColorPalette(props){

    return (
        <div className="
        absolute flex gap-1
        bottom-full 
        ">
            <div onClick={()=>props.color("red")} className="cursor-pointer w-[15px] h-[15px] bg-red-500 rounded-[100%]"></div>
            <div onClick={()=>props.color("yellow")} className="cursor-pointer w-[15px] h-[15px] bg-yellow-300 rounded-[100%]"></div>
            <div onClick={()=>props.color("green")} className="cursor-pointer w-[15px] h-[15px] bg-green-400 rounded-[100%]"></div>

        </div>
    )
}
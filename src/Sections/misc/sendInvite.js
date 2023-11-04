import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
export default function SendInvite(props){

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
            <form className="flex gap-4 justify-center items-center outlin px-4 mt-4">
                <input required pattern="[' ']*[^' ']+[' ']*" className=" outline-none w-1/2 border-b-2 border-blue-700 px-2 py-1 " placeholder="username" type="text" />
                <input required className=" outline-none w-1/2 border-b-2 border-blue-700 px-2 py-1 " placeholder="role" type="text" />
                <button type='submit' className="flex justify-center items-center rounded-full p-[5px] cursor-pointer bg-blue-700 text-white text-2xl ml-4 ">
                    <AiOutlineUsergroupAdd/>
                </button>
            </form>
        </div>
    )
}
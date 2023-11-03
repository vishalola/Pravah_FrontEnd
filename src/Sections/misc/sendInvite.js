import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'
export default function SendInvite(props){

    return (
        <div className={`absolute min-w-[300px] 
        ${props.vis?"scale-100":"scale-0"}
        transition-all
        shadow-lg rounded-lg
        bg-white
        px-3 py-8
        `}>
            <div className="text-blue-700 flex justify-between px-3 text-2xl">
                Send Invite 
                <div onClick={()=>props.setInviteVis(false)} className='flex items-center cursor-pointer '>
                    <RxCross1/>
                </div>
            </div>
            <form className="flex justify-between items-center outlin px-4 mt-4">
                <input required pattern="[' ']*[^' ']+[' ']*" className="outline-none w-full border-b-2 border-blue-700 px-2 py-1 " placeholder="username" type="text" />
                <button type='submit' className="flex justify-center items-center rounded-full p-[5px] cursor-pointer bg-blue-700 text-white text-2xl ml-4 ">
                    <AiOutlineUsergroupAdd/>
                </button>
            </form>
        </div>
    )
}
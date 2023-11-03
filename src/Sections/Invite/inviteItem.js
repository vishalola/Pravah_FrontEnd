import {MdDone} from 'react-icons/md'
import {RxCross2} from 'react-icons/rx'
import {GrUserAdd} from 'react-icons/gr'
export default function InviteItem(props){

    return (
        <div className="px-3 mx-2 py-2 outlin my-2 flex justify-between items-center text-sm">
            <div className='text-xl mr-3'> 
                <GrUserAdd/>
            </div>
            <div className="outlin select-none">
                <div className="font-bold inline">{props.name}</div> has invited you to join
                <div className="font-bold inline"> {props.project} </div>
            </div>
            <div className='flex ml-6 text-2xl outlin items-center justify-center gap-2'>
                <div className='hover:text-white hover:bg-green-600 cursor-pointer hover:scale-110 transition-all'>
                    <MdDone/>
                </div>
                <div className='hover:text-white hover:bg-red-600 cursor-pointer hover:scale-110 transition-all'>
                    <RxCross2/>
                </div>
            </div>
        </div>
    )
}
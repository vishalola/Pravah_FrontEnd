import {PiEnvelopeOpenThin} from 'react-icons/pi'
import InviteBox from './invitebox'
import { useState } from 'react'
import {RxCross1} from 'react-icons/rx'
export default function Invites(props){
    const [vis,setVis] = useState(false);
    return (
        <div className="
         absolute top-10 right-10
        flex justify-end items-center
        shadow-lg z-[100] bg-white
        text-4xl border-b-2 border-blue-700
        ">
            <div onClick={()=>setVis(!vis)} className='px-2 py-1 hover:bg-[#d7d7d7] cursor-pointer'>
                {!vis && <PiEnvelopeOpenThin/>}
                {vis && <RxCross1/>}
            </div>
            {vis && <InviteBox/>}
        </div>
    )
}
import {PiEnvelopeOpenThin} from 'react-icons/pi'
import InviteBox from './invitebox'
import { useEffect, useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import axios from 'axios';
export default function Invites(props){
    const [vis,setVis] = useState(false);
    const [invites,setInvites] = useState([]);
    useEffect(()=>{
        handleClick()
    },[])
    let handleClick = ()=>{
        axios.get("http://localhost:5001/invite/view",{ headers: { Authorization:localStorage.getItem('jwtToken') }}).then(res=>{
                let data = res.data.invites;
                setInvites(data);
        }).catch(e=>{
            console.log(e);
        })
    }
    return (
        <div className="
         absolute top-10 right-10
        flex justify-end items-center
        shadow-lg z-[100] bg-white
        text-4xl border-b-2 border-blue-700
        ">
            <div onClick={()=>{
                setVis(!vis)
                handleClick();
                }} className='px-2 py-1 hover:bg-[#d7d7d7] cursor-pointer'>
                {!vis && <PiEnvelopeOpenThin/>}
                {vis && <RxCross1/>}
            </div>
            {vis && <InviteBox update={handleClick} invites={invites}/>}
        </div>
    )
}
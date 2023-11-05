import axios from "axios";
import { useEffect,useState } from "react";
import InviteItem from "./inviteItem"
export default function InviteBox(props){
        
        const [invites,setInvites] = useState([]);

        useEffect(()=>{
            setInvites([]);
            props.invites.forEach(inv=>{
                setInvites(invite=>[...invite,<InviteItem update={props.update} name={inv.author} project={inv.projectName} role={inv.role} projectID={inv.projectID}/>])
            })

        },[props.invites])

        

        return(
            <div className="bg-white z-10 text-base outlin shadow-xl py-8 border-b-2 border-blue-700 absolute top-full mt-4 min-w-[400px]">
                <div className="
                flex justify-center items-center mb-3
                text-3xl text-blue-700 p-2">
                    Invitations
                </div>
                <div className="max-h-[400px] rounded-lg mx-2 bg-[#f1f1f190] overflow-scroll">
                    {invites}
                </div>
            </div>
        )
}
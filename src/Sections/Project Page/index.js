import Temp from "../../React Flow/index.js";
import Dock from "../Dock";
import OpenProject from "../Dock/openProject";
import ProjectTitle from "../Dock/projectTitle";
import Team from "../Team";
import { useState } from "react";
import NewProject from "../misc/newProject";
import Invites from "../Invite";
import SendInvite from "../misc/sendInvite";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function ProjectPage(props){
    const location = useLocation();
    const [openVis,setOpenVis] = useState(false);
    const [newVis,setNewVis] = useState(false);
    const [teamVis,setTeamVis] = useState(false);
    const [inviteVis,setInviteVis] = useState(false);
    useEffect(()=>{
        if(location.pathname==="/new")
        {
            setNewVis(true);
        }
    },[])
  
    return (
    <div className="overflow-hidden relative w-[100vw] h-[100vh] flex justify-center items-center">
        <ProjectTitle title="Untitled Project"/>
        <Temp/>
        <Dock setInviteVis={setInviteVis} setOpenVis = {setOpenVis} setNewVis={setNewVis} setTeamVis={setTeamVis}/>
        <OpenProject vis={openVis} setOpenVis={setOpenVis}/>
        <Team vis={teamVis} setTeamVis={setTeamVis}/>
        <NewProject vis={newVis} setNewVis={setNewVis}/>
        <Invites/>
        <SendInvite vis={inviteVis} setInviteVis={setInviteVis}/>
    </div>
    )
}
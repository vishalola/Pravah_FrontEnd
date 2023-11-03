import {AiOutlineUser,AiOutlineMail,AiOutlineFileAdd} from "react-icons/ai"
import {MdAlternateEmail} from 'react-icons/md'
import {CgScrollV} from 'react-icons/cg'
import ProjectItem from "../Dock/projectItem"
import { useNavigate } from "react-router-dom"
export default function Profile(props){
    let navigate = useNavigate();
    return (
        <>
        <div className=
        {`h-[100vh] entranceAnimate flex justify-center items-center relative`}
        >
            <div className="outlin p-2 flex md:flex-col">
                <div className="
                flex flex-col justify-center gap-4
                items-center outlin px-4
                min-w-[250px] text-white">
                    {/* Profile Section */}
                    <div className=" bg-white text-blue-700 rounded-full p-3 text-[60px]">
                        <AiOutlineUser/>
                    </div>
                    <div className="font-light text-3xl">
                        Vishal Ola
                    </div>
                    <div className={`bg-white shadow-lg shadow-[#1f1f1f69]  px-5 py-3 rounded-xl text-sm text-black`}>
                        <div className="flex  outlin my-1">         
                            <div className="outlin text-2xl mr-2">
                                <MdAlternateEmail/>
                            </div>
                            <div>
                                vishalola21
                            </div>
                        </div>
                        <div className="flex my-1 ">
                            <div className=" outlin text-2xl mr-2">
                                <AiOutlineMail/>
                            </div>
                            <div>
                                vishalola555@gmail.com
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="
            text-white text-3xl scrollEffect
            outlin absolute bottom-8">
                <CgScrollV/>
            </div>
        </div>
        <div className="h-[100vh] pb-[200px] px-4 entranceAnimate outlin flex items-center justify-center flex-col">
            <div className="mt-10 outlin font-light text-[50px] text-white">
                Projects
            </div>
            <div className="
            flex flex-col items-center
            bg-blue-600 text-white shadow-lg shadow-[#1f1f1f47] rounded-xl p-4 mt-10 w-[500px] ">
                    
                    <div className="outlin rounded-md  w-full px-3 py-1 my-4">
                        <ProjectItem name="Hush App" owner="Vishal Ola" creationDate="05-10-2023"/>
                        <ProjectItem name="Hush App" owner="Vishal Ola" creationDate="05-10-2023"/>
                        <ProjectItem name="Hush App" owner="Vishal Ola" creationDate="05-10-2023"/>
                        <ProjectItem name="Hush App" owner="Vishal Ola" creationDate="05-10-2023"/>
                        <ProjectItem name="Hush App" owner="Vishal Ola" creationDate="05-10-2023"/>
                        <ProjectItem name="Hush App" owner="Vishal Ola" creationDate="05-10-2023"/>

                    </div>
                    <div onClick={()=>navigate("/new")} className="cursor-pointer hover:outline-none bg-blue-600 hover:bg-[white] transition-all hover:text-blue-700 flex items-center justify-center gap-2 outline px-3 py-2">
                        <div className="text-xl">
                            <AiOutlineFileAdd/>
                        </div>
                        Create New Project
                    </div>
            </div>
        </div>
        </>
    )
}
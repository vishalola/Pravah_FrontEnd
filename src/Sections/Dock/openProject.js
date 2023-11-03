import ProjectItem from './projectItem'
export default function OpenProject(props){

    return (

        <div className={`
        pb-14
        ${props.vis?"scale-100":"scale-0"}
        shadow-lg
        rounded-lg
        transition-all
        absolute outlin max-w-[500px] w-full min-h-[100px] bg-white`}>
            <div className="select-none text-blue-700 outlin py-2 px-4 mt-2 w-full text-3xl font-light">
                {/* your projects */}
                Your Projects
                
            </div>
            
            <div className="outlin bg-[#b1b1b110] mx-4 rounded-lg p-2 max-h-[200px] overflow-scroll">
                {/* create new project */}
                <ProjectItem name="Hush App" owner="Vishal Ola" creationDate="05-10-2023"/>
                <ProjectItem name="Hush App" owner="Vishal Ola" creationDate="05-10-2023"/>
                <ProjectItem name="Hush App" owner="Vishal Ola" creationDate="05-10-2023"/>

            </div>
            <div className="select-none absolute outlin flex bottom-0 right-4 gap-6 ">
                {/* buttons */}
                <div className="cursor-pointer hover:text-white hover:bg-blue-700 transition-all border-b-2 border-blue-700 px-4 py-1 m-2">
                    Open
                </div>
                <div onClick={()=>props.setOpenVis(false)} className="cursor-pointer hover:text-white hover:bg-blue-700 transition-all border-b-2 border-blue-700 px-4 py-1 m-2 ">
                    Close
                </div>
            </div>
        </div>
    )
}
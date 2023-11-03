import {AiOutlineClose} from 'react-icons/ai'
export default function NewProject(props){

    return (
        <div className={`
        ${props.vis?"scale-100":"scale-0"}
        shadow-lg
        py-6
        rounded-lg
        transition-all
        absolute outlin max-w-[300px] w-full min-h-[100px] bg-white`}>
           <div className="flex items-center justify-between outlin mb-2 px-4 py-2 text-lg text-blue-700 ">
            Create New Project
            <div onClick={()=>props.setNewVis(false)} className='mx-2 text-2xl cursor-pointer'>
                <AiOutlineClose/>
            </div>
           </div>
           <div className="flex outlin justify-center">
            <input placeholder="Untitled Project" className="p-2 outline-none border-b-2 border-blue-700" type="text" name="" id="" />
            <div className="flex justify-center items-center ml-4 px-2 bg-blue-700 text-white rounded-sm cursor-pointer">
                Create
            </div>
           </div>
        </div>
    )
}
import TeamItem from './teamItem';
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function Team(props){

    return (
        <div className={`
        absolute bg-white
        outlin min-w-[350px]
        flex flex-col items-center justify-center
        min-h-[200px]
        py-4 px-4 shadow-xl
        rounded-xl
        transition-all
        duration-500
        ${props.vis?"right-2":"right-[-450px]"}
        border-x-2
        border-blue-700
        `}>
            <div className="outlin text-blue-700  text-center text-3xl p-2">
                Your Team
            </div>
            <div className="w-full outlin my-2 bg-[#b1b1b110]  rounded-lg p-2 max-h-[500px] overflow-scroll">
                <TeamItem name="Sahil Yadav" role="Frontend"/>
                <TeamItem name="Pranav Tiwari" role="Backend"/>
                <TeamItem name="Vishal Ola" role="Author"/>
                <TeamItem name="Pavitra Pandey" role="Backend"/>
            </div>

            <div onClick={()=>props.setTeamVis(false)} className='absolute cursor-pointer rounded border-blue-700 outline-[1px] px-2 hover:outline text-blue-700 left-[-60px] text-3xl'>
                <AiOutlineArrowRight/>
            </div>
        </div>
    )
}


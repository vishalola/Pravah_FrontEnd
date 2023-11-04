import {Doughnut} from 'react-chartjs-2' 
import {Chart as ChartJs,Tooltip,Title, ArcElement, Legend} from 'chart.js'
import TaskItem from './taskItem';
import { useState } from 'react';
export default function Tasks(props){
    
    let [completed,setCompleted] = useState(0);
    let [assigned,setAssigned] = useState(5);
    const data = {
        labels: [
          'Assigned',
          'Completed',
        ],
        datasets: [{
          data: [assigned, completed],
          borderWidth:0,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 2
        }]
      };
      const options = {
        cutout:"70%" // Adjust the cutout percentage here
      };
      ChartJs.register(Title,Tooltip,ArcElement)
    return (
        <div className="h-[100vh] entranceAnimate flex justify-center items-center">
            <div className="outlin  gap-2 text-white flex w-[80%] min-h-[400px] md:flex-col">
                <div className="w-full outlin max-h-[500px] overflow-scroll p-4 flex flex-col "> 
                    <TaskItem assigned = {setAssigned} completed = {setCompleted} task="Some doable" project="Temple Fun"/>
                    <TaskItem assigned = {setAssigned} completed = {setCompleted} task="Some doable task 2" project="Hush App"/>
                    <TaskItem assigned = {setAssigned} completed = {setCompleted} task="Some doable task 3" project="Prava"/>
                    <TaskItem assigned = {setAssigned} completed = {setCompleted} task="Some doable task 4" project="Conexion"/>
                    <TaskItem assigned = {setAssigned} completed = {setCompleted} task="Some doable task 5" project="Pravah App"/>
                </div>
                <div className="relative md:h-[300px] md:mt-10 outlin w-[400px] md:w-full flex justify-center items-center">
                    <Doughnut className='cursor-pointer' data={data} options={options}/>
                    <div className='absolute text-[60px] pointer-events-none'>
                        {Math.floor((completed/(assigned+completed))*100)} %
                    </div>
                </div>
            </div>
        </div>
    )
}
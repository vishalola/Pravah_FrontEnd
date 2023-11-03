import {Handle,Position} from 'reactflow'
import Node from '../Node'
export default  function CustomNode(){

    return (
        <div>
             <Handle type='target' id="top" position={Position.Top}/>
            <Node/>
            <Handle type='source' id="bottom" position={Position.Bottom}/>
        </div>
    )
}
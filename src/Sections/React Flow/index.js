import { useCallback, useMemo, useRef } from "react";
import { ReactFlow,useNodesState,useEdgesState, addEdge, Background, ReactFlowProvider, } from "reactflow" 
import 'reactflow/dist/style.css';
import CustomNode from "./custom";
import AddIcon from "../AddIcon";
import { useReactFlow } from "reactflow";
const initialNodes = [];
const initialEdges = [];
let id = 1;
const getId = () => `${id++}`;
function Check(){
    let HEIGHT = window.innerHeight;
    let WIDTH = window.innerWidth;
    const [nodes,setNodes,onNodesChange] = useNodesState(initialNodes)
    const [edges,setEdges,onEdgesChange] = useEdgesState(initialEdges)
    const reactFlowWrapper = useRef(null);
    const connectingNodeId = useRef(null);
    const nodeType = useMemo(()=>({special:CustomNode}),[])
    const { project } = useReactFlow();
    let onConnect = useCallback(
        (connection)=>{
            setEdges(edg=>addEdge(connection,edg))
    },[setEdges])
    let addNode = ()=>{
        setNodes(nods =>[...nods, { id:getId(),type:"special", position: { x:WIDTH/2 - 100, y: HEIGHT/2 -100}}])
    }
    const onConnectStart = useCallback((_, { nodeId }) => {
        connectingNodeId.current = nodeId;
      }, []);
      const onConnectEnd = useCallback(
        (event) => {
          const targetIsPane = event.target.classList.contains('react-flow__pane');
    
          if (targetIsPane) {
            // we need to remove the wrapper bounds, in order to get the correct position
            const { top, left } = reactFlowWrapper.current.getBoundingClientRect();
            const id = getId();
            const newNode = {
              id,
              type:"special",
              // we are removing the half of the node width (75) to center the new node
              position: project({ x: event.clientX - left - 75, y: event.clientY - top })
            };
            
            console.log(event.target.getAttribute('data-handle'))
            setNodes((nds) => nds.concat(newNode));
            setEdges((eds) => eds.concat({ id, source: connectingNodeId.current, target: id }));
          }
        },
        [project]
      );
    return(
        <div ref={reactFlowWrapper} className=" h-full w-full outline">
           <ReactFlow  
           nodeTypes={nodeType} 
           defaultEdgeOptions={{animated:true}} 
           nodes={nodes} 
           edges={edges} 
           onNodesChange={onNodesChange} 
           onEdgesChange={onEdgesChange} 
           onConnect={onConnect}
           onConnectStart={onConnectStart}
           onConnectEnd={onConnectEnd}
           >
                <Background variant="blank"/>
            </ReactFlow>
            <div onClick={addNode} className="absolute bottom-10 sm:bottom-20 right-10 z-[10] bg-white outlin rounded-[100%] w-[50px] h-[50px]">
                <AddIcon/>
            </div>
            
        </div>
    )

}
export default function Temp(){
    return (
    <ReactFlowProvider>
        <Check/>
    </ReactFlowProvider>
    )
}
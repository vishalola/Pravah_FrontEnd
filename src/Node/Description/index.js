export default function Description(props){

    return (
        <div contentEditable 
        placeholder="Description.."
        className={`
        nodrag
        cursor-text
        text-xs outline-none
        my-2 italic
        `}
        style={{maxWidth:`${props.maxWidth}px`}}
        >
            
        </div>
    )
}
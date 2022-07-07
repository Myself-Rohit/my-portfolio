import {memo} from "react";

function Button(props) {
  
    return (
        <>
            <button type={props.type || "text"} disabled={props.disabled} className={`hover:scale-110 duration-300 bg-cyan-600 border-cyan-900 border hover:bg-blue-500 font-medium text-gray-300
             px-7 py-1 rounded-md ${props.classs}`}>{props.children}</button>
        </>
    )
}
export default memo(Button);
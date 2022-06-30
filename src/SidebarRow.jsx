import React from "react";
import { Link } from 'react-scroll'
 
function SidebarRow(props) {
  
  return (
    <>
      <Link to={props.href} onClick={props.onClick} smooth={true} duration={800} className={`flex items-center hover:bg-gradient-to-t from-cyan-300 to-gray-500 rounded-lg my-1 p-2 px-3 w-full text-sm font-medium `}>
        <img className="w-5 h-5 mr-4 object-cover shrink-0" src={props.src} />
        {props.children}</Link>
    </>
  )
}

export default SidebarRow;

///  className={ ({isActive})=>  (" flex items-center hover:bg-gray-500 rounded-lg my-1 p-2 px-3 w-full text-sm font-medium") + (isActive?ActiveLink:NormalLink) }>

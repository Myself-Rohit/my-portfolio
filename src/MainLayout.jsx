import React from "react";
import {Link} from "react-scroll";
import Sidebar from "./Sidebar";

function MainLayout(props) {
    return (
        <>
            <div className="sm:hidden py-1 pr-4 fixed top-0 left-0 right-0 flex z-50 justify-end text-sm bg-black text-cyan-600 ">
                
                <Link smooth={true} duration={800}  to="home" className=" hover:bg-gradient-to-r from-cyan-500 rounded-lg hover:text-white text-xs p-2">Home</Link>
                
                <Link smooth={true} duration={800}  to="about" className=" hover:bg-gradient-to-r from-cyan-500 rounded-lg hover:text-white text-xs p-2 mx-2">About</Link>
                
                <Link smooth={true} duration={800}  to="projects" className=" hover:bg-gradient-to-r from-cyan-500 rounded-lg hover:text-white text-xs p-2 mx-2">Projects</Link>

                <Link smooth={true} duration={800}  to="contact" className=" hover:bg-gradient-to-r from-cyan-500 rounded-lg hover:text-white text-xs p-2">Contact</Link>
            </div>
            
            <div className="flex ">
               <Sidebar></Sidebar>
                <div className="min-h-screen bg-black grow sm:pl-16">{props.children}</div>
            </div> 
        </>
    );
}
export default MainLayout
import React from "react";
import Button from "./Button"

export function Project(props) {

let classs = props.classs || ''
    

    return (<>
        <div className="flex flex-col sm:flex-row items-center sm:items-stretch border-2 p-4 border-cyan-600 ">
        <h1 className="sm:hidden mb-4 text-2xl text-gray-400 font-bold">{props.title_gray}<span className="ml-2 text-2xl text-white font-bold">{props.title_white}</span>
                </h1>
            <a href={props.href} target="_blank" className="shrink-0 sm:mr-4">
                <img className={"h-72 w-80 border-4 border-cyan-600 rounded-md object-cover shrink-0 " + classs}
                    src={props.image} />
            </a>

             <div className="flex flex-col grow space-y-4 items-center justify-between">
                <h1 className="hidden sm:block text-2xl text-gray-400 font-bold">{props.title_gray}<span className="ml-2 text-2xl text-white font-bold">{props.title_white}</span>
                </h1>
                <p className="text-white ">{props.children}
                </p>
               <a className="" href={props.href} target="_blank"><Button>view</Button></a>
            </div>
        </div>
               </>
        
    );
}
export default Project;
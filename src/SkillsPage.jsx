import React from "react";

function SkillsPage() {
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-white rounded-xl text-2xl text-center w-32 p-2 mt-10 mb-5 border border-cyan-600 shadow-md shadow-cyan-500">My skills</h1>
                <div className="text-white text-sm pb-10  space-x-2 max-w-md">
                    <div className=" shadow-md shadow-gray-600 rounded-full border border-gray-500 mt-2 inline-block p-5 ">HTML</div>
                    <div className=" shadow-md shadow-gray-600 rounded-full border border-gray-500 mt-2 inline-block p-5 ">CSS</div>
                    <div className=" shadow-md shadow-gray-600 rounded-full border border-gray-500 mt-2 inline-block p-5 ">Javascript</div>
                    <div className=" shadow-md shadow-gray-600 rounded-full border border-gray-500 mt-2 inline-block p-5 ">React</div>
                    <div className=" shadow-md shadow-gray-600 rounded-full border border-gray-500 mt-2 inline-block p-5 ">Git</div>
                    <div className=" shadow-md shadow-gray-600 rounded-full border border-gray-500 mt-2 inline-block p-5 ">Github</div>
                    <div className=" shadow-md shadow-gray-600 rounded-full border border-gray-500 mt-2 inline-block p-5 ">Tailwind css</div>
                    <div className=" shadow-md shadow-gray-600 rounded-full border border-gray-500 mt-2 inline-block p-5 ">Responsive Design</div>
               </div>
                
               </div>
        </>
    );
}
export default SkillsPage
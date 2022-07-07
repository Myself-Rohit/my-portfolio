import React from "react";

function Contact(props) {

    return (
        <>
            <div className="flex items-center ">
                <h1 className="text-white w-32">{props.text}</h1>
                <div className="flex flex-col my-4">
                <input
                    name={props.name}
                    type={props.type || "text"}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    touched={props.touched}
                    error={props.error}
                    placeholder={props.placeholder}
                    value={props.value}
                    className="p-1 w-60 rounded bg-zinc-900 ring-1 ring-cyan-600 ">
                </input>
                    <div className="h-1 mt-1">
                        {props.error && props.touched &&
                            <span className="text-red-500 text-sm">{props.error}</span>}
                    </div>
                </div>
            </div>
        
        </>
    );
}
export default Contact;
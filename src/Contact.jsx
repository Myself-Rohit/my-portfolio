import { useState } from "react";

function Contact(props) {
    const [value, setValue] = useState('')
    const onChange = (event) => {
         setValue(event.target.value)
    }
    let themeclass = props.theme || '';

    return (
        <>
            <div className="flex items-center ">
                <h1 className="text-white w-32">{props.text}</h1>
                <input className={" p-1 my-4 w-60 rounded bg-zinc-900 ring-1 ring-cyan-600 " + themeclass}
                    name={props.name}
                    type={props.type || "text"}
                    onChange={onChange} placeholder={props.placeholder}
                    value={props.value || value}></input>
            </div>
        
        </>
    );
}
export default Contact;
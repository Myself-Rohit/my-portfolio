import React from "react";
import Button from "./Button";
import Contact from "./Contact";
import emailjs from "emailjs-com";

function ContactPage() {

    const sendMail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_odehthc', 'template_gmzha2h', e.target, 'snmK_umaSAp2owAjx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
    }

    return (
        <section id="contact">
            <div className="py-10 min-h-screen text-white h-full flex flex-col items-center">
                <h1 className="pb-10 sm:py-0 text-white text-4xl font-bold underline decoration-cyan-600">Contact<span className="text-cyan-600"> Me</span></h1>

                <div className="flex flex-col sm:flex-row sm:pt-20">
                    <div className="flex flex-col">
                          <Contact text='Name :' value="Rohit Negi" />
                          <Contact text='Email :' value="rohitnegi263139@gmail.com" />
                          <Contact text='Phone No :' value="7302270537"/>
                    </div>

  <span className=" border border-t sm:border-l my-10 sm:h-96 sm:mx-4 sm:-mt-20 sm:mb-0 border-white"></span>
                    
                    
                    <form onSubmit={sendMail}
                        className="flex flex-col form-control">
                         <Contact name="name" type="text" placeholder="Full Name" theme="" text='Your Name :' />
                         <Contact name="email" type="email" placeholder="Email" theme="" text='Your email :' />
                        
                        <div className="flex items-center">
                            <h1 className="text-white w-32">send message :</h1>
                            <textarea name="message"
                                placeholder="Type message here"
                                rows="4" className="p-1 my-4 w-60 rounded bg-zinc-900 ring-1 ring-cyan-600"></textarea></div>
                         
                        <div className="flex justify-end">
                            <Button type="submit">Submit</Button></div>
                    </form>
                </div>

                <div className="border-b rounded-md p-4 flex flex-col items-center">
                    <div className="flex space-x-5 ">
                     
                     <a href="https://github.com/Myself-Rohit" target="_blank"><img className="w-7 h-7 object-cover" src="https://img.icons8.com/nolan/2x/github.png"/></a> 

                 <a href="https://www.linkedin.com" target="_blank"><img className="w-7 h-7 object-cover" src="https://img.icons8.com/nolan/2x/linkedin-circled.png" /></a>

                    <a href="https://www.facebook.com/profile.php?id=100025210593910" target="_blank"><img className="w-7 h-7 object-cover" src="https://img.icons8.com/nolan/2x/facebook-new.png" /></a>

                    <a href="https://www.instagram.com/ro_hit_78_" target="_blank"><img className="w-7 h-7 object-cover" src="https://img.icons8.com/nolan/2x/instagram-new.png" /></a>

                    <a href="https://www.twitter.com/MrRohit__" target="_blank"><img className="w-7 h-7 object-cover" src="https://img.icons8.com/nolan/2x/twitter.png" /></a>
                </div>
                    <h1 className="flex mt-4">Made with <img className="w-6 h-6 mx-1 object-cover" src="https://img.icons8.com/emoji/2x/heart-exclamation.png" />  at CodeYogi</h1>
                </div>
            </div>
        </section>
    );
}
export default ContactPage;

//  <FormControl>
// <InputLabel htmlFor="textContract">{`textContract`}</InputLabel>
// <Input
//   id="textContract"
//   multiline
//   rows="30"
//   type="text"
//   value={props.textContract}
//   onChange={() => {}}
// />
//                     </FormControl>
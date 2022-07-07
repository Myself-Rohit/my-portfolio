import React from "react";
import Photo from "./images/pic.jpg";
import Button from "./Button";
import { Link } from "react-scroll";


function HomePage() {
    return (
        <>
            <section id="home" className="flex flex-col sm:flex-row justify-center min-h-screen items-center sm:-ml-4 py-10 bg-no-repeat bg-center bg-cover bg-[url('https://media.istockphoto.com/photos/product-showcase-with-spotlight-black-studio-room-background-use-as-picture-id1304681590?b=1&k=20&m=1304681590&s=170667a&w=0&h=UlTsdL4KIRPcxbhgOrsIoE0BNNE6KpgxVhRD3gz_fV0=')]" >
                <img src={Photo} className="h-80 rounded-full object-fit object-left shrink-0 border-2 border-cyan-600" />
                <div className="sm:ml-4">
                    <h1 className="text-white text-5xl font-bold">Hi<span className="text-cyan-600">!</span>
                        <div>
                            <span >I<span className="text-cyan-600">'</span>m</span>
                            <span className="ml-2 text-cyan-500 ">RoHit</span>
                        </div>
                    </h1>
                    <p className="text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white max-w-sm text-sm py-4 ">A passionate front-end web developer.</p>
                    
                        <Link smooth={true} duration={800} to="contact"><Button>Contact</Button></Link>
                    
                </div>
                
            </section>
            
        </>
    );
}
export default HomePage;

// Hello! visitor, I am Rohit Negi. I am a full-stack web developer based in India.  I am passionate and dedicated to my work and I create beautifull UI's for websites and web applictions 
import {memo} from "react";
import SkillsPage from "./SkillsPage";
import myPhoto from "./images/pic2.jpg";
import pdf from "./resume/ResumePdf.pdf";
import Link from "react-scroll/modules/components/Link";
import Button from "./Button";

function AboutPage() {
    return (
        <section id="about" className="flex flex-col items-center touch-auto" >
            <div className="pt-10 sm:mx-10">
                <h1 className="text-white text-4xl font-bold ">About <span className="text-cyan-600">Me</span></h1>

                <div className="sm:flex ">
                    <div className="flex flex-col justify-evenly bg-gray-300 border-2 border-cyan-600  p-4 sm:mr-4 rounded-2xl items-center ">
                        <p className="max-w-screen-md">
                            Hello! I am Rohit Negi. I am a front-end web developer based in India. I am passionate and dedicated to my work and I create beautifull UI's for websites and web applictions. 
                            You may see my work in<Link className="text-cyan-600 font-semibold cursor-pointer" smooth={true} duration={800} to="projects"> project</Link> section.
                        </p>

                        <div className="flex items-start justify-around w-full">

                        <div className="flex text-sm flex-col">
                            <p className="font-bold px-2 rounded-sm py-1">Name <span className="text-xs font-medium ml-1">ROHIT NEGI</span></p>
                            <p className="font-bold px-2 rounded-sm w-full py-1">Age <span className="text-xs font-medium ml-1">19</span></p>
                            <p className="font-bold px-2 rounded-sm w-full py-1">Resume <a className="text-blue-500 font-normal ml-1" href={pdf} target="_blank">Veiw</a></p>
                            </div>
                            <a href={pdf} download="Rohit's Resume"><Button className="button">Download resume</Button></a>
                        </div>
                    </div>
                    <div className="bg-cyan-600 h-80 relative sm:block hidden">
                 <img className="rotate-1 h-80 shrink-0 object-cover " src={myPhoto} /></div>
                 </div>
            </div>
            <SkillsPage/>
        </section>
    );
}
export default memo(AboutPage);
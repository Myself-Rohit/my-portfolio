import { memo, useState } from 'react';
import SidebarRow from './SidebarRow';

function Sidebar() {
    const [isopen, setIsopen] = useState(false);
	
    return (
        <>
            <div className={`${ isopen? "w-40" : "w-12" }  duration-500 hidden sm:block top-0 left-0 fixed h-full bg-cyan-500`}>
                <img className={`${ !isopen? "rotate-0 right-3" : "rotate-180 -right-1" } duration-500 absolute cursor-pointer top-4  w-7`} src='https://img.icons8.com/material-two-tone/2x/circled-chevron-right.png'
                    onClick={() => setIsopen(!isopen)} />
                
                <div className={`${!isopen?"scale-0":""} duration-500 flex items-center pl-4`}>
                  <img className="w-5 h-5 cursor-text" src="https://img.icons8.com/ios-filled/2x/portfolium.png"/>
                  <p className={` py-4  text-xl font-bold`}>ortfolio</p>
                </div>
                
                <div className="cursor-pointer">
                    <SidebarRow onClick={() => setIsopen(false)} href="home" src="https://img.icons8.com/glyph-neue/2x/home.png" >
                        <h1 className={`${isopen ? " duration-500" : "scale-0"}`}>Home</h1>
                    </SidebarRow>
                
                    <SidebarRow onClick={() => setIsopen(false)} href="about" src="https://img.icons8.com/metro/2x/about.png" >
                        <h1 className={`${isopen ? " duration-500" : "scale-0"}`}>About</h1>
                    </SidebarRow>
                
                    <SidebarRow onClick={() => setIsopen(false)} href="projects" src="https://img.icons8.com/external-flat-icons-inmotus-design/2x/external-book-reading-flat-icons-inmotus-design-15.png" >
                        <h1 className={`${isopen ? " duration-500" : "scale-0"}`}>Projects</h1>
                    </SidebarRow>
                
                    <SidebarRow onClick={() => setIsopen(false)} href="contact" src="https://img.icons8.com/glyph-neue/2x/contacts.png">
                        <h1 className={`${isopen ? " duration-500" : "scale-0"}`}>Contact</h1>
                    </SidebarRow>
                </div>
            </div>
        </>
    );
}
export default memo(Sidebar);
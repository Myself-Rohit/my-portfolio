import React from "react";
import Todo from "./images/Todo.jpg";
import AskJud from "./images/Ask.jpg";
import CodeYogi from "./images/CodeYogi.jpg";
import Project from "./Project";
import weather from "./images/weather-app-img.jpg";
import covid19tracker from "./images/covid-19-tracker.jpg";
import eCommerceCart from "./images/e-commerce-cart.jpg";

function ProjectsPage() {
    return (
        <section id="projects" className="pt-10">
            <div className="text-white flex justify-center text-4xl pb-10 font-bold">My <span className="text-cyan-600 ml-2"> projects</span></div>
            <div className="flex flex-col space-y-5 overflow-auto h-screen sm:pr-4">

            <Project image={eCommerceCart} title_gray="E-commerce" title_white="Cart" href="https://stately-squirrel-0f7531.netlify.app" classs="">
                  This is an e-commerce-cart project. In this project you can add and remove items in your cart, increase or decrease their quantity. and you can see the calculated total price of items in your cart.
                </Project>

                <Project image={covid19tracker} title_gray="Corona" title_white="Tracker" href="https://strong-frangipane-211632.netlify.app" classs="object-left">
                    This is Covid-19-tracker. It is a fully responsive appllication. It helps us to get track of covid-19 throughout the world.
                </Project>
               
                <Project image={weather} title_gray="Weather" title_white="App" href="https://classy-crisp-440ebb.netlify.app/" classs="object-center">
                    This is a weather application. It shows you the current weather conditions of places you search for.
                </Project>
                
                <Project image={AskJud} title_gray="Ask Jud" title_white="Clone" href="https://assignment-34-create-ask-jud-clone-rohitnegi2.codeyogiteam.repl.co/">
                Do you need to ask a question? Are you looking for answers? This application offers you a space to ask anything you want.
                </Project>

                <Project image={Todo} title_gray="Todo" title_white="App" href=" https://assignment-33-create-a-todo-app-rohitnegi2.codeyogiteam.repl.co/" classs="object-bottom" >
                    ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do.
                </Project>

                <Project image={CodeYogi} title_gray="CodeYogi " title_white="Clone" href="https://famous-gumption-0df4d6.netlify.app" classs="object-left">
                    It is a clone of https://app.codeyogi.io which i build by using my various skills .
                </Project>

                
            </div>
            
        </section>
    );
}
export default ProjectsPage;
import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MainLayout from "./MainLayout";
import ContactPage from "./ContactPage";
import ProjectsPage from "./ProjectsPage";

function App() {
  return (
    <>
      <MainLayout>
         <HomePage />
         <AboutPage /> 
         <ProjectsPage/>
         <ContactPage />
      </MainLayout> 
    </>
  );
}
export default App;
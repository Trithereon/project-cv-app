import { useState } from "react";
import "./styles/App.css";
import ContactInfoForm from "./components/ContactInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

function App() {
  return (
    <>
      <ContactInfoForm />
      <br />
      <EducationForm />
      <br />
      <ExperienceForm />
      <ExperienceForm />
    </>
  );
}

export default App;

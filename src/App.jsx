import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./styles/App.css";
import ContactInfoForm from "./components/ContactInfoForm";
import EducationForm from "./components/EducationForm";

function App() {
  return (
    <>
      <ContactInfoForm />
      <br />
      <EducationForm />
    </>
  );
}

export default App;

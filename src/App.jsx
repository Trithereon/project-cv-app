import { useState } from "react";
import "./styles/App.css";
import ContactInfoForm from "./components/ContactInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

function App() {
  const [data, setData] = useState({
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
    education: [],
    experience: [],
  });

  const updateContactInfo = (field, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        contactInfo: {
          ...prevData.contactInfo,
          [field]: value,
        },
      };
    });
  };

  return (
    <>
      <ContactInfoForm
        contactInfo={data.contactInfo}
        onChange={updateContactInfo}
      />
      <br />
      <EducationForm />
      <br />
      <ExperienceForm />
      <ExperienceForm />
    </>
  );
}

export default App;

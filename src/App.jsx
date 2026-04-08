import { useState } from "react";
import "./styles/App.css";
import ContactInfoForm from "./components/ContactInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import FormSection from "./components/FormSection";
import Accordion from "./components/Accordion";

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

  const addEducationData = () => {
    setData((prevData) => {
      return {
        ...prevData,
        education: [
          ...prevData.education,
          {
            id: crypto.randomUUID(),
            school: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: "",
          },
        ],
      };
    });
  };

  const updateEducationData = (id, field, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        education: prevData.education.map((form) =>
          form.id === id ? { ...form, [field]: value } : form,
        ),
      };
    });
  };

  const addExperienceData = () => {
    setData((prevData) => {
      return {
        ...prevData,
        experience: [
          ...prevData.experience,
          {
            id: crypto.randomUUID(),
            jobTitle: "",
            employer: "",
            responsibilities: "",
            startDate: "",
            endDate: "",
          },
        ],
      };
    });
  };

  const updateExperienceData = (id, field, value) => {
    setData((prevData) => {
      return {
        ...prevData,
        experience: prevData.experience.map((form) =>
          form.id === id ? { ...form, [field]: value } : form,
        ),
      };
    });
  };

  const deleteExperienceData = (id) => {
    setData((prevData) => {
      return {
        ...prevData,
        experience: prevData.experience.filter((form) => form.id !== id),
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
      <Accordion title="Education" onAddForm={addEducationData}>
        {data.education.map((form) => (
          <EducationForm
            key={form.id}
            education={form}
            onChange={(field, value) =>
              updateEducationData(form.id, field, value)
            }
          />
        ))}
      </Accordion>
      <br />
      <FormSection title="Work Experience" addForm={addExperienceData}>
        {data.experience.map((form) => (
          <ExperienceForm
            key={form.id}
            experience={form}
            onChange={(field, value) =>
              updateExperienceData(form.id, field, value)
            }
          />
        ))}
      </FormSection>
    </>
  );
}

export default App;

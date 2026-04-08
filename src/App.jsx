import { useState } from "react";
import "./styles/app.css";
import ContactInfoForm from "./components/ContactInfoForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import Accordion from "./components/Accordion";
import Button from "./components/Button";
import { FaAddressCard, FaGraduationCap, FaBriefcase } from "react-icons/fa6";

function App() {
  const [data, setData] = useState({
    contactInfo: {
      name: "",
      email: "",
      phone: "",
    },
    education: [
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
      },
    ],
    experience: [
      {
        id: crypto.randomUUID(),
        jobTitle: "",
        employer: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ],
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

  const deleteEducationData = (id) => {
    setData((prevData) => {
      return {
        ...prevData,
        education: prevData.education.filter((form) => form.id !== id),
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
      <Accordion title="Contact Info" icon={<FaAddressCard />}>
        <ContactInfoForm
          contactInfo={data.contactInfo}
          onChange={updateContactInfo}
        />
      </Accordion>
      <br />
      <Accordion
        title="Education"
        icon={<FaGraduationCap />}
        onAddForm={addEducationData}
      >
        {data.education.map((form) => (
          <EducationForm
            key={form.id}
            education={form}
            onChange={(field, value) =>
              updateEducationData(form.id, field, value)
            }
            onDelete={() => deleteEducationData(form.id)}
          />
        ))}
      </Accordion>
      <br />
      <Accordion
        title="Work Experience"
        icon={<FaBriefcase />}
        onAddForm={addExperienceData}
      >
        {data.experience.map((form) => (
          <ExperienceForm
            key={form.id}
            experience={form}
            onChange={(field, value) =>
              updateExperienceData(form.id, field, value)
            }
            onDelete={() => deleteExperienceData(form.id)}
          />
        ))}
      </Accordion>
    </>
  );
}

export default App;

import Accordion from "./Accordion";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import "../styles/ExperienceForm.css";
import { useId, useState } from "react";

export default function ExperienceForm({ experience, onChange }) {
  const [editMode, setEditMode] = useState(true);
  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // pulls e.target.name and e.target.value
    onChange(name, value);
  };

  return (
    <form id="experience">
      <Input
        type="text"
        label="Job Title: "
        id={"jobTitle" + id}
        name="jobTitle"
        autoComplete="off"
        classes="medium"
        onChange={handleChange}
      />
      <Input
        type="text"
        label="Employer: "
        id={"employer" + id}
        name="employer"
        autoComplete="off"
        classes="medium"
        onChange={handleChange}
      />
      <TextArea
        label="Main responsibilities: "
        id={"responsibilities" + id}
        name="responsibilities"
        autoComplete="off"
        onChange={handleChange}
      />
      <Input
        type="date"
        label="Start date: "
        id={"jobStartDate" + id}
        name="startDate"
        autocomplete="off"
        onChange={handleChange}
      />
      <Input
        type="date"
        label="End date: "
        id={"JobEndDate" + id}
        name="endDate"
        autocomplete="off"
        onChange={handleChange}
      />
      <Button
        classes={editMode ? "submit" : "edit"}
        label={editMode ? "Submit" : "Edit"}
        onClick={editMode ? handleSubmit : handleEdit}
      />
    </form>
  );
}

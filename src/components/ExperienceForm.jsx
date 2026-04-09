import Accordion from "./Accordion";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import "../styles/form.css";
import { useId, useState } from "react";

export default function ExperienceForm({
  experience,
  onChange,
  onDelete,
  editMode,
}) {
  const id = useId();

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
        value={experience.jobTitle}
        onChange={handleChange}
        disabled={!editMode}
      />
      <Input
        type="text"
        label="Employer: "
        id={"employer" + id}
        name="employer"
        autoComplete="off"
        classes="medium"
        value={experience.employer}
        onChange={handleChange}
        disabled={!editMode}
      />
      <Input
        type="text"
        label="Location: "
        id={"location" + id}
        name="location"
        autoComplete="off"
        classes="medium"
        value={experience.location}
        onChange={handleChange}
        disabled={!editMode}
      />
      <TextArea
        label="Main responsibilities: "
        id={"responsibilities" + id}
        name="responsibilities"
        autoComplete="off"
        value={experience.responsibilities}
        onChange={handleChange}
        disabled={!editMode}
      />
      <Input
        type="date"
        label="Start date: "
        id={"jobStartDate" + id}
        name="startDate"
        autocomplete="off"
        value={experience.startDate}
        onChange={handleChange}
        disabled={!editMode}
      />
      <Input
        type="date"
        label="End date: "
        id={"JobEndDate" + id}
        name="endDate"
        autocomplete="off"
        value={experience.endDate}
        onChange={handleChange}
        disabled={!editMode}
      />
      <Button classes="delete" label="Delete Entry" onClick={onDelete} />
    </form>
  );
}

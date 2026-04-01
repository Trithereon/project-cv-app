import Button from "./Button";
import Input from "./Input";
import "../styles/ExperienceForm.css";
import TextArea from "./TextArea";
import { useId } from "react";

export default function ExperienceForm() {
  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked!");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("Edit button clicked!");
  };

  return (
    <>
      <form id="experience">
        <Input
          type="text"
          label="Job Title: "
          id={"jobTitle" + id}
          name="jobTitle"
          autoComplete="off"
          classes="medium"
        />
        <Input
          type="text"
          label="Employer: "
          id={"employer" + id}
          name="employer"
          autoComplete="off"
          classes="medium"
        />
        <TextArea
          label="Main responsibilities: "
          id={"responsibilities" + id}
          name="responsibilities"
          autoComplete="off"
        />
        <Input
          type="date"
          label="Start date: "
          id={"jobStartDate" + id}
          name="jobStartDate"
          autocomplete="off"
        />
        <Input
          type="date"
          label="End date: "
          id={"JobEndDate" + id}
          name="JobEndDate"
          autocomplete="off"
        />
        <Button classes="submit" label="Submit" onClick={handleSubmit} />
        <Button classes="edit" label="Edit" onClick={handleEdit} />
      </form>
    </>
  );
}

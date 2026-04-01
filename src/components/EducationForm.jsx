import Button from "./Button";
import Input from "./Input";
import "../styles/EducationForm.css";
import { useId } from "react";

export default function EducationForm() {
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
      <form id="education">
        <Input
          type="text"
          label="School: "
          id={"school" + id}
          autoComplete="off"
          classes="medium"
        />
        <Input
          type="text"
          label="Degree: "
          id={"degree" + id}
          autoComplete="off"
          classes="medium"
        />
        <Input
          type="text"
          label="Field of study: "
          id={"fieldOfStudy" + id}
          autoComplete="off"
          classes="small"
        />
        <Input
          type="date"
          label="Start date: "
          id={"studyStartDate" + id}
          name="studyStartDate"
          autocomplete="off"
        />
        <Input
          type="date"
          label="End date: "
          id={"studyEndDate" + id}
          name="studyEndDate"
          autocomplete="off"
        />
        <Button classes="submit" label="Submit" onClick={handleSubmit} />
        <Button classes="edit" label="Edit" onClick={handleEdit} />
      </form>
    </>
  );
}

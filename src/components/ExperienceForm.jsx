import Button from "./Button";
import Input from "./Input";
import "../styles/ExperienceForm.css";
import TextArea from "./TextArea";

export default function ExperienceForm() {
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
          id="jobTitle"
          autoComplete="off"
          classes="medium"
        />
        <Input
          type="text"
          label="Employer: "
          id="employer"
          autoComplete="off"
          classes="medium"
        />
        <TextArea
          label="Main responsibilities: "
          id="responsibilities"
          autoComplete="off"
        />
        <Input
          type="date"
          label="Start date: "
          id="jobStartDate"
          autocomplete="off"
        />
        <Input
          type="date"
          label="End date: "
          id="JobEndDate"
          autocomplete="off"
        />
        <Button classes="submit" label="Submit" onClick={handleSubmit} />
        <Button classes="edit" label="Edit" onClick={handleEdit} />
      </form>
    </>
  );
}

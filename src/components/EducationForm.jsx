import Button from "./Button";
import Input from "./Input";
import "../styles/EducationForm.css";

export default function EducationForm() {
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
          id="school"
          autoComplete="off"
          classes="medium"
        />
        <Input
          type="text"
          label="Degree: "
          id="degree"
          autoComplete="off"
          classes="medium"
        />
        <Input
          type="text"
          label="Field of study: "
          id="fieldOfStudy"
          autoComplete="off"
          classes="small"
        />
        <Input
          type="date"
          label="End date: "
          id="studyEndDate"
          autocomplete="off"
        />
        <Button label="Submit" onClick={handleSubmit} />
        <Button label="Edit" onClick={handleEdit} />
      </form>
    </>
  );
}

import Button from "./Button";
import Input from "./Input";
import "../styles/ContactInfoForm.css";

export default function ContactInfoForm({}) {
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
      <form id="contactInfo">
        <Input
          type="text"
          label="Name: "
          id="name"
          autoComplete="name"
          classes="medium"
        />
        <Input
          type="email"
          label="Email: "
          id="email"
          autoComplete="email"
          classes="large"
        />
        <Input
          type="tel"
          label="Phone number: "
          id="tel"
          autoComplete="tel"
          classes="small"
        />
        <Button classes="submit" label="Submit" onClick={handleSubmit} />
        <Button classes="edit" label="Edit" onClick={handleEdit} />
      </form>
    </>
  );
}

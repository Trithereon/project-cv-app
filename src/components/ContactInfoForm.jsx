import Button from "./Button";
import Input from "./Input";
import "../styles/ContactInfoForm.css";
import { useId } from "react";

export default function ContactInfoForm({ contactInfo, onChange }) {
  const [editMode, setEditMode] = useState(true);
  const id = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    console.log("Edit button clicked!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // pulls e.target.name and e.target.value
    onChange(name, value);
  };

  return (
    <>
      <form id="contactInfo">
        <Input
          type="text"
          label="Name: "
          id={"name" + id}
          name="name"
          autoComplete="name"
          classes="medium"
          value={contactInfo.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          label="Email: "
          id={"email" + id}
          name="email"
          autoComplete="email"
          classes="large"
          value={contactInfo.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          label="Phone number: "
          id={"phone" + id}
          name="phone"
          autoComplete="tel"
          classes="small"
          value={contactInfo.phone}
          onChange={handleChange}
        />
        <Button classes="submit" label="Submit" onClick={handleSubmit} />
        <Button classes="edit" label="Edit" onClick={handleEdit} />
      </form>
    </>
  );
}

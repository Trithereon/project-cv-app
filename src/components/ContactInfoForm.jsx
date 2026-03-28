import Button from "./Button";
import Input from "./Input";

export default function ContactInfoForm({}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked!");
  };

  return (
    <>
      <form>
        <Input type="text" label="Name: " id="name" />
        <Input type="email" label="Email: " id="email" />
        <Input type="tel" label="Phone number: " id="phone" />
        <Button label="Submit" onClick={handleSubmit} />
      </form>
    </>
  );
}

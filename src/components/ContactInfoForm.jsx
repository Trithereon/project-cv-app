import Accordion from "./Accordion";
import Button from "./Button";
import Input from "./Input";
import "../styles/ContactInfoForm.css";
import { useState, useId } from "react";

export default function ContactInfoForm({ contactInfo, onChange }) {
  const id = useId();

  const handleChange = (e) => {
    const { name, value } = e.target; // pulls e.target.name and e.target.value
    onChange(name, value);
  };

  return (
    <form id="contactInfo">
      <Input
        type="text"
        label="Name: "
        id={"name" + id}
        name="name"
        autoComplete="off"
        classes="medium"
        value={contactInfo.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        label="Email: "
        id={"email" + id}
        name="email"
        autoComplete="off"
        classes="large"
        value={contactInfo.email}
        onChange={handleChange}
      />
      <Input
        type="tel"
        label="Phone number: "
        id={"phone" + id}
        name="phone"
        autoComplete="off"
        classes="small"
        value={contactInfo.phone}
        onChange={handleChange}
      />
    </form>
  );
}

import Accordion from "./Accordion";
import Button from "./Button";
import { useState } from "react";

export default function FormSection({ title, children, addForm }) {
  const [editMode, setEditMode] = useState(true);

  return (
    <Accordion title={title}>
      {children}
      <Button classes="addForm" label={"Add " + title} onClick={addForm} />
    </Accordion>
  );
}

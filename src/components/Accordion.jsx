import Button from "./Button";
import { useState } from "react";

export default function Accordion({
  title,
  icon,
  children,
  onAddForm,
  onSubmit,
  onEdit,
}) {
  const [editMode, setEditMode] = useState(true);

  return (
    <details className="accordion" open>
      <summary>{title}</summary>
      {children}
      <Button
        classes={editMode ? "submit" : "edit"}
        label={editMode ? "Submit" : "Edit"}
        onClick={editMode ? onSubmit : onEdit}
      />
      <Button
        style={title === "Contact Info" ? "display:none" : ""}
        classes="addForm"
        label={"Add " + title}
        onClick={onAddForm}
      />
    </details>
  );
}

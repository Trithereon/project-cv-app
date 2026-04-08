import Button from "./Button";
import { useState } from "react";

export default function Accordion({ title, icon, children, onAddForm }) {
  const [editMode, setEditMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditMode(true);
  };

  return (
    <details className="accordion" open>
      <summary>{title}</summary>
      {children}
      <Button
        classes={editMode ? "submit" : "edit"}
        label={editMode ? "Submit" : "Edit"}
        onClick={editMode ? handleSubmit : handleEdit}
      />
      <Button
        style={
          title === "Contact Info"
            ? { display: "none" }
            : { display: "inline-block" }
        }
        classes="addForm"
        label={"Add " + title}
        onClick={onAddForm}
      />
    </details>
  );
}

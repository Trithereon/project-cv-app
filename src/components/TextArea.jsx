export default function TextArea({ label, id, autoComplete, classes, name }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <textarea
        id={id}
        autoComplete={autoComplete}
        name={name}
        className={classes}
      />
    </div>
  );
}

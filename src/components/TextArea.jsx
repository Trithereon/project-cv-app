export default function TextArea({ label, id, autoComplete, classes }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <textarea
        id={id}
        autoComplete={autoComplete}
        name={id}
        className={classes}
      />
    </div>
  );
}

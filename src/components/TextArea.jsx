export default function TextArea({
  label,
  id,
  autoComplete,
  classes,
  name,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <br />
      <textarea
        id={id}
        autoComplete={autoComplete}
        name={name}
        className={classes}
        onChange={onChange}
      />
    </div>
  );
}

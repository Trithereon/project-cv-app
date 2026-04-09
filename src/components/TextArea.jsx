export default function TextArea({
  label,
  id,
  autoComplete,
  classes,
  name,
  onChange,
  value,
  disabled,
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
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

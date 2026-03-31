export default function Input({ type, label, id, autoComplete, classes }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        autoComplete={autoComplete}
        name={id}
        className={classes}
      />
    </div>
  );
}

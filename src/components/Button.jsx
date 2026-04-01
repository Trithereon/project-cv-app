export default function Button({ onClick, label, classes }) {
  return (
    <>
      <button onClick={onClick} className={classes}>
        {label}
      </button>
    </>
  );
}

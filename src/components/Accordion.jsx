export default function Accordion({ title, icon, children }) {
  return (
    <details className="accordion">
      <summary>{title}</summary>
      {children}
    </details>
  );
}

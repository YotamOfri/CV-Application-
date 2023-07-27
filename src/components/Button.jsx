export function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={`btn ${props.className === undefined ? "" : props.className}`}
    >
      {props.text}
    </button>
  );
}

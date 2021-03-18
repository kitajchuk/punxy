export default function Button(props) {
  return (
    <button onClick={props.handler} className="punxy__btn">
      {props.children}
    </button>
  );
}
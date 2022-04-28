import { Animate } from './Animation';

export default function Button(props) {
  return (
    <Animate>
      <button onClick={props.handler} className="punxy__btn -btn">
        {props.children}
      </button>
    </Animate>
  );
}
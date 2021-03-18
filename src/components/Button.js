import { withAnimate } from '../lib/animate';

function Button(props) {
  return (
    <button onClick={props.handler} className="punxy__btn">
      {props.children}
    </button>
  );
}

export default withAnimate(Button);
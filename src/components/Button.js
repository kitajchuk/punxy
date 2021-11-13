import { withAnimate } from './animate';

function Button(props) {
  return (
    <button onClick={props.handler} className="punxy__btn -btn">
      {props.children}
    </button>
  );
}

export default withAnimate(Button);
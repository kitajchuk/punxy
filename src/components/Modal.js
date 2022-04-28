import Masthead from './Masthead';
import Button from './Button';

export default function Modal({abortHandler, confirmHandler}) {
  return (
    <div className="punxy__modal">
      <div className="punxy__modal__wrap">
        <Masthead>
          <h1>your local store will be replenished with new data from network nodes.<br /><br /><strong>fight the power</strong>.</h1>
        </Masthead>
        <div className="punxy__btns">
          <Button handler={abortHandler}>cancel</Button>
          <Button handler={confirmHandler}>confirm</Button>
        </div>
      </div>
    </div>
  );
}
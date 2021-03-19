import Masthead from './Masthead';
import Button from './Button';

export default function Modal({abortHandler, confirmHandler}) {
  return (
    <div className="punxy__modal">
      <div className="punxy__modal__wrap">
        <Masthead>
          <h1>seeding disperses your current transactions out to all your peers. your local store will be replenished with seeds from your peers.<br /><br /><strong>fight the power</strong>.</h1>
        </Masthead>
        <div className="punxy__btns">
          <Button handler={abortHandler}>nevermind...</Button>
          <Button handler={confirmHandler}>need to seed</Button>
        </div>
      </div>
    </div>
  );
}
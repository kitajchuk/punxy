import Masthead from './Masthead';
import Button from './Button';

export default function Modal({abortHandler, confirmHandler}) {
  return (
    <div className="punxy__modal">
      <div className="punxy__modal__wrap">
        <Masthead>
          <h1><strong>know what you're doing</strong>. seeding disperses your current transactions out to all your peers. likewise, your local store will be replenished with your peers' seeds. fight the power.</h1>
        </Masthead>
        <div className="punxy__btns">
          <Button handler={abortHandler}>nevermind...</Button>
          <Button handler={confirmHandler}>lets do it!</Button>
        </div>
      </div>
    </div>
  );
}
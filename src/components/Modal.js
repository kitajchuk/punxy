import Masthead from './Masthead';
import Button from './Button';

export default function Modal({abortHandler, confirmHandler}) {
  return (
    <div className="punxy__modal">
      <div className="punxy__modal__wrap">
        <Masthead>
          <h1>seeding disperses your data blocks on the P2P network. your local store will be replenished with new blocks from peer nodes.<br /><br /><strong>fight the power</strong>.</h1>
        </Masthead>
        <div className="punxy__btns">
          <Button handler={abortHandler}>back out</Button>
          <Button handler={confirmHandler}>do it</Button>
        </div>
      </div>
    </div>
  );
}
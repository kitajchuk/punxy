import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Controller from 'properjs-controller';

// HOC
// Usage: export default withAnimate(SomeComponent);
// https://reactjs.org/docs/higher-order-components.html
export function withAnimate(WrappedComponent) {
  return ({...props}) => {
    const elRef = useRef();
    const scRef = useRef();
    const [animated, setAnimated] = useState(false);
    const classes = {
      '-anim': true,
      'is-animated': animated,
    };

    useEffect(() => {
      if (elRef.current) {
        // RAF utility
        // check element bounds
        // trigger animation & stop listening...
        scRef.current = new Controller();
        scRef.current.go(() => {
          if (elRef.current) {
            const bounds = elRef.current.getBoundingClientRect();

            if (bounds.top < window.innerHeight && bounds.bottom > 0) {
              scRef.current.stop();
              setAnimated(true);
            }
          }
        });
      }

      return function cleanup() {
        if (scRef.current) {
          scRef.current.stop();
        }
      };
    }, [elRef, scRef]);

    return (
      <div ref={elRef} className={classNames(classes)}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};
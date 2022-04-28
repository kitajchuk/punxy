export default function Controls({ctrlHandler, refreshHandler, active}) {
  // Proxy handler to "bubble" up which control?
  const onControl = (e) => {
    ctrlHandler(e.target.innerText);
  };

  // Proxy handler to "bubble" up our desire to contribute?
  const onRefresh = (e) => {
    refreshHandler(e.target.innerText);
  };

  return (
    <div className="punxy__ctrl">
      <ul className="-ul">
        <li className={active === 'time' ? 'is-active' : ''} onClick={onControl}>time</li>
        <li>&nbsp;/&nbsp;</li>
        <li className={active === 'score' ? 'is-active' : ''} onClick={onControl}>score</li>
        <li>&nbsp;/&nbsp;</li>
        <li className={active === 'by' ? 'is-active' : ''} onClick={onControl}>by</li>
        <li className="punxy__seed" onClick={onRefresh}>refresh</li>
      </ul>
    </div>
  );
}
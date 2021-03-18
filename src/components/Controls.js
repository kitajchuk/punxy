export default function Controls({handler, active}) {
  // Proxy handler to "bubble" up which control?
  const onControl = (e) => {
    handler(e.target.innerText);
  };

  return (
    <div className="punxy__ctrl">
      <ul className="-ul">
        <li className={active === 'time' ? 'is-active' : ''} onClick={onControl}>time</li>
        <li>&nbsp;/&nbsp;</li>
        <li className={active === 'score' ? 'is-active' : ''} onClick={onControl}>score</li>
        <li>&nbsp;/&nbsp;</li>
        <li className={active === 'by' ? 'is-active' : ''} onClick={onControl}>by</li>
        <li>&nbsp;|&nbsp;</li>
        <li>polling: no</li>
      </ul>
    </div>
  );
}
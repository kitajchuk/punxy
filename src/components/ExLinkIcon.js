export default function ExLinkIcon() {
  const html = {
    __html: `
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">
        <g>
          <path d="M16,10c-0.6,0-1,0.4-1,1v6c0,0.6-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h6c0.6,0,1-0.4,1-1S9.6,3,9,3H3
            C1.3,3,0,4.3,0,6v11c0,1.7,1.3,3,3,3h11c1.7,0,3-1.3,3-3v-6C17,10.4,16.6,10,16,10z"/>
          <path d="M19.9,0.6c-0.1-0.2-0.3-0.4-0.5-0.5C19.3,0,19.1,0,19,0h-6c-0.6,0-1,0.4-1,1s0.4,1,1,1h3.6l-9.3,9.3c-0.4,0.4-0.4,1,0,1.4
            C7.5,12.9,7.7,13,8,13s0.5-0.1,0.7-0.3L18,3.4V7c0,0.6,0.4,1,1,1s1-0.4,1-1V1C20,0.9,20,0.7,19.9,0.6z"/>
        </g>
      </svg>
    `
  };

  return (
    <div className="-i" dangerouslySetInnerHTML={html}></div>
  );
}
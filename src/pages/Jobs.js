import { useEffect } from 'react';
import Masthead from '../components/Masthead';
import { JobsFeed } from '../components/Feed';

export default function Jobs() {
  useEffect(() => {
    document.body.classList.add('is-jobs');
    document.body.classList.remove('is-wtf');
  });

  return (
    <>
      <Masthead>
        <h1>fancy yourself a freelancer with illusions standing? look no further.</h1>
      </Masthead>
      {/* uses custom loading texts */}
      <JobsFeed loading1="locating a signal in the noise..." loading2="compiling available job options..." />
    </>
  );
}
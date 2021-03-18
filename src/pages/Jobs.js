import { useEffect } from 'react';
import Masthead from '../components/Masthead';
import { JobsFeed } from '../components/Feed';

export default function Jobs() {
  useEffect(() => {
    document.body.classList.add('is-jobs');
  });

  return (
    <>
      <Masthead>
        <h1>fancy yourself a freelancer with illusions standing? look no further.</h1>
      </Masthead>
      <JobsFeed />
    </>
  );
}
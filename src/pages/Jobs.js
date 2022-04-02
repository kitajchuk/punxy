import { useEffect } from 'react';
import Masthead from '../components/Masthead';
import Feed from '../components/Feed';

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
      <Feed 
        endpoint="jobstories"
        loading1="locating signals in the noise..."
        loading2="indexing the dark net bounty board..."
      />
    </>
  );
}
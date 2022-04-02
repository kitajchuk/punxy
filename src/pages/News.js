import { useEffect } from 'react';
import Masthead from '../components/Masthead';
import Feed from '../components/Feed';
import { Link } from 'react-router-dom';

export default function News() {
  useEffect(() => {
    document.body.classList.remove('is-jobs', 'is-wtf');
  });

  return (
    <>
      <Masthead>
        <h1>your proxy to what the “hackers” call “news” and the latest <Link to="/jobs">freelance nets</Link>.</h1>
      </Masthead>
      <Feed 
        endpoint="newstories"
        loading1="connecting to network nodes..."
        loading2="querying latest data blocks..."
      />
    </>
  );
}
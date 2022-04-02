import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../store/selectors';
import Masthead from '../components/Masthead';

// A little storytelling here...
// I came up with the idea for my app on a run the other day
// It's nothing special, but I always feel like having a story
//    to tell really helps tie the experience together, however big or small that is
// So I just made up some cyberpunk junk to fill in the gaps a bit and provide context :)
export default function About() {
  const user = useSelector(selectUser);

  useEffect(() => {
    document.body.classList.remove('is-jobs');
    document.body.classList.add('is-wtf');
  });

  return (
    <>
      <Masthead>
        <h1>i guess we gave you too much credit. anyway, here's what we do “know”.</h1>
      </Masthead>
      <div className="punxy__wtf">
        <p>
          <strong>punxy</strong> is an autonomous, global cyber net. 
          presumably the <strong>punxy</strong> AI came online sometime around the year 2049. 
          no one knows for sure anymore. 
          if you're any kind of leet hacker you would know this already. 
          today we use only a small portion of the <strong>punxy</strong> neural-net to aggregate global hacker feeds and dark net bounties. 
          this is the first stop on your way to becoming a leet hacker. 
          beyond <strong>punxy</strong> a whole network of cyber surfing awaits your tingling neurons. 
          don't be scared, space cowboy, and proceed without caution. 
        </p>
        <p>see you in dark nets <strong>{user}</strong>...</p>
        <p>&mdash;1337</p>
      </div>
    </>
  );
}
import { useEffect } from 'react';
import Masthead from '../components/Masthead';
import { useSelector } from 'react-redux';
import { selectUser } from '../lib/slices';

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
        <p><strong>punxy</strong> is an autonomous, global cyber net. even we don't know how it works. it's theorized that a small clan of elite hackers are responsible for the creation of <strong>punxy</strong> some time ago, around the year 2049. nothing is known about this supposed group of elitists. like we said, it's just a theory. it's also prophesied that <strong>punxy</strong> will one day evolve into a bio-enhanced, cybernetic entity capable of immeasurable feats of consciousness. maybe it will be able to unlock consciousness itself. again, all theorized. for now, we manage to use <strong>punxy</strong> to scour the cyber highways, dropping nets to intercept and aggregate hacker transactions in near real-time. we provide that service to you, the mundane hacker, in hopes you may one day level up and provide some value to the greater hacker community. see you in the nets cyber <strong>{user}</strong>...</p>
        <p>&mdash;1337</p>
      </div>
    </>
  );
}
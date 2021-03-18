import { useEffect } from 'react';
import Masthead from '../components/Masthead';
import { getUser } from '../lib/api';

export default function About() {
  useEffect(() => {
    document.body.classList.remove('is-jobs');
  });

  return (
    <>
      <Masthead>
        <h1>i guess we gave you too much credit. anyway, here's what we do “know”.</h1>
      </Masthead>
      <div className="punxy__wtf">
        <p><strong>punxy</strong> is an autonomous, global cyber net. Even we don't know how it works... it's theorized that a small clan of elite hackers are responsible for the creation of <strong>punxy</strong> sometime ago, around the year 2049. nothing is known about this supposed group of elitists. like we said, it's just a theory. it's prophesied that <strong>punxy</strong> will one day evolve into a bio-cybernetic entity capable of immeasurable feats of consciousness. maybe it will be able to identify consciousness itself. again, all theorized. for now, we manage to use <strong>punxy</strong> to scour the cyber highways, dropping nets to intercept and aggregate hacker transactions in near real-time. we provide that service to you, the mundane hacker, in hopes you may one day level up and provide some value to the greater hacker community. so, don't say we didn't warn you...</p>
        <p>Long live <strong>{getUser()}</strong></p>
      </div>
    </>
  );
}
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Masthead from '../components/Masthead';
import Feed from '../components/Feed';
import { selectUser } from '../store/selectors';

// https://create-react-app.dev/docs/adding-images-fonts-and-files/
import { ReactComponent as Graphic } from '../assets/friendsters.svg';

function CommonPage({endpoint}) {
  return (
    <>
      <Masthead>
        <h1>your proxy to the hacker news feeds and the latest <Link to="/jobs">freelance nets</Link>.</h1>
      </Masthead>
      <Feed endpoint={endpoint} />
    </>
  );
}

export function New() {
  return <CommonPage  endpoint="newstories" />;
}

export function Top() {
  return <CommonPage  endpoint="topstories" />;
}

export function Best() {
  return <CommonPage  endpoint="beststories" />;
}

export function Ask() {
  return <CommonPage  endpoint="askstories" />;
}

export function Show() {
  return <CommonPage  endpoint="showstories" />;
}

export function Jobs() {
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

// A little storytelling here...
// I came up with the idea for my app on a run the other day
// It's nothing special, but I always feel like having a story
//    to tell really helps tie the experience together, however big or small that is
// So I just made up some cyberpunk junk to fill in the gaps a bit and provide context :)
export function Info() {
  const user = useSelector(selectUser);

  return (
    <>
      <Masthead>
        <h1>everything changed in 2049 when the world was consumed by the metaverse...</h1>
      </Masthead>
      <div className="punxy__info">
        <p>
          <strong>punxy</strong> is an autonomous, global cyber net. 
          presumably the <strong>punxy</strong> AI came online sometime around the year 2049. 
          no one knows for sure anymore. 
          if you're any kind of leet hacker you would know this already. 
          today we use only a small portion of the <strong>punxy</strong> neural-net to aggregate global hacker feeds and dark net bounties. 
          this is the first stop on any script kiddie's way to becoming a leet hacker. 
          beyond <strong>punxy</strong> a whole network of cyber surfing awaits your tingling neurons. 
          don't be scared, space cowboy, and proceed without caution. 
        </p>
        <div className="punxy__friendsters">
          <Graphic />
        </div>
        <p>see you in dark nets <strong>{user}</strong>...</p>
        <p>&mdash;1337</p>
      </div>
    </>
  );
}

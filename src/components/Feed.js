import { withStories, withJobs } from '../lib/api';
import Controls from './Controls';
import Button from './Button';
import Loading from './Loading';
import List from './List';

function Feed({data}) {
  return (
    <div className="punxy__feed">
      {data ? (
        <>
          <Controls />
          <List items={data} />
          <Button>more, i must see more!</Button>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

const NewsFeed = withStories(Feed);
const JobsFeed = withJobs(Feed);

export {
  NewsFeed,
  JobsFeed,
}
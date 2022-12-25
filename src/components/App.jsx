import Profile from './Profile';
import user from '../library/user.json';

import Statistics from './Statistics';
import data from '../library/data.json';

import FriendList from './FriendList';
import friends from '../library/friends.json';

import TransactionHistory from './TransactionHistory';
import transactions from '../library/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};

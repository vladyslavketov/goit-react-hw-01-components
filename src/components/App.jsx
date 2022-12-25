import Profile from './Profile/Profile';
import user from '../library/user.json';

import Statistics from './Statistics/Statistics';
import data from '../library/data.json';

import FriendList from './FriendList/FriendList';
import friends from '../library/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../library/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        padding: 40,
        backgroundColor: "rgb(239, 253, 255)",
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

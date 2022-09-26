import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { GlobalStyle } from './GlobalStyle';

import { TaskContainer } from 'components/TaskContainer/TaskContainer';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './Friend/FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <TaskContainer title={'Task 1 - Profile'}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </TaskContainer>

      <TaskContainer title={'Task 2 - Statistics'}>
        <Statistics stats={data} />
      </TaskContainer>

      <TaskContainer title={'Task 3 - FriendList'}>
        <FriendList friends={friends} />
      </TaskContainer>

      <TaskContainer title={'Task 4 - TransactionHistory'}>
        <TransactionHistory items={transactions} />
      </TaskContainer>

      <GlobalStyle />
    </div>
  );
};

import userProfile from './user.json';
import dataStat from './data.json';
import friendlist from './friends.json';
import transactions from './transactions.json';
import { StatisticList } from 'components/Statisctics/StatiscticList';
import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/Friends';
import { Section } from 'components/Section';
import { Transaction } from 'components/Transations';
const users = userProfile;
const data = dataStat;
const friends = friendlist;
const trans = transactions;

export const App = () => {
  return (
    <div className="app"> 
      <Section title="Profile">
        {users.map(user =>(
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />))}
      </Section>
      <Section title="Statistics">
        <StatisticList title="Upload stats" stats={data} />
        <StatisticList stats={data} />
      </Section>
      <Section title="Friends">
          <FriendList friends={friends}/>
      </Section>
      <Section title="Transactions">
        <Transaction  items={trans}/>
      </Section>
    </div>
  );
};

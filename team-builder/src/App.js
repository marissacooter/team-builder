import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './member';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {firstName: 'marissa', lastName: 'cooter', role: 'nonFurry'},
    {firstName:'zoe', lastName:'stokes', role:'furry'}
]);
  return (
  <div>
    {teamMembers.map(member => (
      <Member teamMember={member}/>
    ))}
  </div>
  );
}

export default App;

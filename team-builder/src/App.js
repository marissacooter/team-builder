import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Member from "./member";
import Form from "./Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    { name: "marissa", email: "nonFurry@gmail.com", role: "nonFurry" },
    { name: "zoe", email: "furry@gmail.com", role: "furry" }
  ]);

  const addMem = (name, email, role) => {
    // exisiting = existing piece of state
    setTeamMembers(existing => [...existing, {name: name, email: email, role: role}])
  } 

  return (
    <>
      <div>
        {teamMembers.map(member => (
          <Member teamMember={member} />
        ))}
      </div>
      <Form addMem = {addMem}/>
    </>
  );
}

export default App;

import React from "react";

const Member = ({teamMember}) => {
  const {name,email,role} = teamMember
  return (
    <div>
      <p>Name: {name} | Email: {email} | Role: {role}</p>
    </div>
  );
};

export default Member;

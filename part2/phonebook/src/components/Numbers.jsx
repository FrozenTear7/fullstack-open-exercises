import React from "react";
import Person from "./Person";

const Numbers = ({ persons, filterName }) => (
  <div>
    {persons
      .filter((person) =>
        person.name.toLowerCase().includes(filterName.toLowerCase())
      )
      .map((person) => (
        <Person key={person.id} person={person} />
      ))}
  </div>
);

export default Numbers;

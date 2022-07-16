import React, { useState } from "react";
import people from "./people";

export default function App() {
  const [gender, setGender] = useState();

  console.log("render app", { gender, people });
  //reduce method to extract wanted Datas

  return (
    <div>
      <ul>
        {people
          .filter((person) => !gender || person.gender === gender)
          .map((person) => (
            //TypeSafe
            <div key={person?.id}>
              <p>
                {person?.name} {person?.gender}
              </p>
            </div>
          ))}
      </ul>

      <button
        onClick={() => {
          setGender("male");
        }}
      >
        Filter Male
      </button>
      <button
        onClick={() => {
          setGender("female");
        }}
      >
        Filter Female
      </button>
    </div>
  );
}

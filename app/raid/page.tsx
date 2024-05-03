"use client";

import React from "react";
import buildings from "../buildings";
import explosives from "../expolsive";

export default function RaidCalculator() {
  type BuildType = {
    name: string;
    hp: number;
    img: string;
    decay: number;
    id: number;
  };

  type ExplosiveType = {
    name: string;
    damage: number;
    cost: Array<{
      name: string;
      count: number;
    }>;
    workbenchLevel: number;
    totalScrap: number;
  };

  const [build, setBuild] = React.useState<BuildType>();
  const [explos, setExplosive] = React.useState<Array{ExplosiveType}>(explosives);

  return (
    <div className="container">
      <section>
        <h1>Взрывчатка</h1>
        {explosives.map((el) => (
          <div>{el}</div>
        ))}
      </section>

      <section>
        <h1>Цель рейда</h1>
        <select
          onChange={(e) => setBuild(JSON.parse(e.target.value))}
          name=""
          id=""
        >
          {buildings.map((el) => (
            <option key={el.id} value={JSON.stringify(el)}>
              {el.name}
            </option>
          ))}
        </select>

        {build && (
          <>
            <img src={build.img} alt="" />
            <p>{build.name}</p>
            <p>{build.hp}</p>
          </>
        )}
      </section>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPuppies } from "../api";
import { deletePuppy } from "../api";
import React from "react";

export default function AllPuppies() {
  const [pups, setPups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPups() {
      const pupList = await getPuppies();
      setPups(pupList.data.players);
    }
    getPups();
  }, []);

  return (
    <div id="puppies">
      <section className="puppies">
        {pups.map((pup) => {
          return (
            <div className="puppy" key={pup.id}>
              <h3 className="puppy-header">
                <span className="name">{pup.name}</span>
                <span className="id">#{pup.id}</span>
              </h3>
              <img className="image" src={`${pup.imageUrl}`} />
              <form
                onClick={() => {
                  navigate(`/${pup.id}`);
                }}
              >
                <button type="onClick">See Details</button>
              </form>
              <form
                onClick={(event) => {
                  event.preventDefault();
                  deletePuppy(pup.id);
                }}
              >
                <button type="onClick">Delete</button>
              </form>
            </div>
          );
        })}
      </section>
    </div>
  );
}

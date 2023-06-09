import React, { useEffect, useState } from "react";
import { fetchPuppy } from "../api";
import { useNavigate, useParams } from "react-router-dom";

export default function SinglePuppy() {
  const navigate = useNavigate();
  const { playerId } = useParams();

  const [pup, setPup] = useState({});

  useEffect(() => {
    async function getPup() {
      const fetchedPup = await fetchPuppy(playerId);
      console.log(fetchedPup);
      setPup(fetchedPup.data.player);
    }
    getPup();
  }, []);

  return (
    <div className="puppy">
      <h3 className="puppy-header">
        <span className="name">{pup.name}</span>
        <span className="id">#{pup.id}</span>
      </h3>
      <img className="image" src={`${pup.imageUrl}`} />
      <form
        onClick={() => {
          navigate("/");
        }}
      >
        <button type="onClick">Back</button>
      </form>
    </div>
  );
}

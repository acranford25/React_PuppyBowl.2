const PUPPYURL = "https://fsa-puppy-bowl.herokuapp.com/api/2301-ftb-et-web-am/";

export async function getPuppies() {
  try {
    const response = await fetch(`${PUPPYURL}players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("Trouble fethching puppies!", error);
  }
}

export async function fetchPuppy(playerId) {
  try {
    const response = await fetch(`${PUPPYURL}players/${playerId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("trouble fetching puppy", error);
  }
}

export async function postPuppy(newPuppy) {
  try {
    const response = await fetch(`${PUPPYURL}players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPuppy),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("trouble posting puppy", error);
  }
}

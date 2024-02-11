// API test

// This would be an environmental variable in other projects.
const baseURL = "https://pokeapi.co/api/v2/";

async function convertToJson(r) {
  let response = await r.json();
  if (r.ok) {
    return response;
  } else {
    throw new Error("Issue Accessing API");
  }
}

async function getData() {
  const response = await fetch(baseURL + "pokemon/roserade");
  const data = await convertToJson(response);
  return data;
}

console.log(getData());
